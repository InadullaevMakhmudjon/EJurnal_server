import { hashSync } from 'bcryptjs';
import { FRAGMENT_USER } from '../fragments';
import { ADMIN } from '../utils/roles';

export default {
  Query: {
    async users(parent, { roleId }, { prisma, auth, hasRole }, info) {
      const userId = await auth();

      if (await hasRole(userId, ADMIN)) {
        const where = {
          role: {
            id: roleId,
          },
        };
        return prisma.users({ where }, info).$fragment(FRAGMENT_USER);
      }
      return [];
    },
    async editors(parent, { userName }, { prisma, auth }, info) {
      await auth();
      const where = {
        AND: {
          role: { id: '003' },
        },
      };
      if (userName) {
        where.AND.userName = userName;
      }
      return prisma.users({ where }, info).$fragment(FRAGMENT_USER);
    },
    async user(parent, { where }, { prisma, auth }, info) {
      await auth();
      return prisma.user(where, info).$fragment(FRAGMENT_USER);
    },
  },
  Mutation: {
    async createUser(parent, { data }, { prisma, auth }, info) {
      // It is open to register authors, but creating other role users is required authontication
      // eslint-disable-next-line no-unused-vars
      const userId = data.role === '002' ? null : await auth();
      const user = {
        ...data,
        password: hashSync(data.password, 7),
        role: {
          connect: {
            id: data.role,
          },
        },
      };
      return prisma.createUser(user, info).$fragment(FRAGMENT_USER);
    },
    async updateUser(parent, { data, where }, { prisma, auth }, info) {
      await auth();
      const user = data.password ? {
        ...data,
        password: hashSync(data.password, 7),
      } : { ...data };
      return prisma.updateUser({ data: user, where }, info);
    },
    async deleteUser(parent, { where }, { prisma, auth }, info) {
      await auth();
      return prisma.deleteUser(where, info);
    },
  },
};
