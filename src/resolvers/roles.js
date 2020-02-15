const fragment = `
fragment RoleWithUser on Role {
  id
  name
  users {
    id
    name
    username
  }
}
`;

export default {
  Query: {
    roles(parent, arg, { prisma }, info) {
      return prisma.roles({}, info).$fragment(fragment);
    },
    role(parent, { where }, { prisma }, info) {
      return prisma.role(where, info).$fragment(fragment);
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
