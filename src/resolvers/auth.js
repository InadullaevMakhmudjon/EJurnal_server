import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';
import { FRAGMENT_USER } from '../fragments';

export default {
  Query: {
    details(parent, arg, { prisma, auth }, info) {
      const userId = auth();
      return prisma.user({ id: userId }, info).$fragment(FRAGMENT_USER);
    },
  },
  Mutation: {
    async signIn(parent, { data }, { prisma }, info) {
      const { userName, password } = data;
      try {
        const user = await prisma.user({ userName }).$fragment(FRAGMENT_USER);

        if (!user) throw new AuthenticationError('Username or password incorrect');
        if (user.blocked) throw new AuthenticationError('You are blocked');

        if (compareSync(password, user.password)) {
          const token = await sign({ userId: user.id }, process.env.JWT_KEY);

          // Sets lastEntered date to user
          await prisma.updateUser({
            data: {
              lastEntered: new Date(),
            },
            where: {
              id: user.id,
            },
          });

          return { token, user };
        }
        throw new AuthenticationError('Username or password incorrect');
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },
  },
};
