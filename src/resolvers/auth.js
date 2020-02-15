import { sign } from 'jsonwebtoken';
import { compareSync, hashSync } from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';

const fragment = `
fragment UserWithRole on User {
    id
    name
    username
    password
    role {
        id
        name
    }
}
`;

export default {
  Query: {
    details(parent, arg, { prisma, auth }, info) {
      const { userId } = auth();
      return prisma.user({ id: userId }, info).$fragment(fragment);
    },
  },
  Mutation: {
    async signIn(parent, { data }, { prisma }, info) {
      const { username, password } = data;
      try {
        const user = await prisma.user({ username }).$fragment(fragment);
        if (compareSync(password, user.password)) {
          const token = await sign({ userId: user.id }, process.env.JWT_KEY);
          return { token, user };
        }
        throw new AuthenticationError('Username or password incorrect');
      } catch (e) {
        throw new AuthenticationError('Username or password incorrect');
      }
    },
    signUp(parent, { data }, { prisma }, info) {
      const {
        name, username, password, roleId,
      } = data;
      const user = {
        name,
        username,
        password: hashSync(password, 7),
        role: {
          connect: {
            id: roleId,
          },
        },
      };
      return prisma.createUser(user, info).$fragment(fragment);
    },
  },
};
