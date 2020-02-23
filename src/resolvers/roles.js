import { FRAGMENT_ROLE } from '../fragments';

export default {
  Query: {
    roles(parent, arg, { prisma }, info) {
      return prisma.roles({}, info).$fragment(FRAGMENT_ROLE);
    },
    role(parent, { where }, { prisma }, info) {
      return prisma.role(where, info).$fragment(FRAGMENT_ROLE);
    },
  },
  Mutation: {
    createRole(parent, { data }, { prisma }, info) {
      return prisma.createRole(data, info);
    },
    updateRole(parent, { data, where }, { prisma }, info) {
      return prisma.updateRole({ data, where }, info);
    },
    deleteRole(parent, { where }, { prisma }, info) {
      return prisma.deleteRole(where, info);
    },
  },
};
