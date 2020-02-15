import { hashSync } from 'bcryptjs';

const fragment = `
fragment UserWithRole on User {
    id
    name
    username
    role {
        id
        name
    }
}
`;

export default {
  Query: {
    users(parent, arg, { prisma, auth }, info) {
      auth();
      return prisma.users({}, info).$fragment(fragment);
    },
    user(parent, { where }, { prisma, auth }, info) {
      auth();
      return prisma.user(where, info).$fragment(fragment);
    },
  },
  Mutation: {
    createUser(parent, { data }, { prisma, auth }, info) {
      auth();
      const user = {
        ...data,
        password: hashSync(data.password, 7),
      };
      return prisma.createUser(user, info);
    },
    updateUser(parent, { data, where }, { prisma, auth }, info) {
      auth();
      const user = data.password ? {
        ...data,
        password: hashSync(data.password, 7),
      } : { ...data };
      return prisma.updateUser({ data: user, where }, info);
    },
    deleteUser(parent, { where }, { prisma, auth }, info) {
      auth();
      return prisma.deleteUser(where, info);
    },
  },
};
