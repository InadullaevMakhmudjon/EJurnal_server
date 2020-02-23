import { AuthenticationError } from 'apollo-server-express';
import { prisma } from '../../prisma/generated/prisma-client';
import { FRAGMENT_USER } from '../fragments';
import { ADMIN, AUTHOR, EDITOR } from '../utils/roles';

const hasRole = async (userId, role) => {
  if (!userId) throw new AuthenticationError('You must be logged in...');
  const user = await prisma.user({ id: userId }).$fragment(FRAGMENT_USER);
  if (user) {
    switch (role) {
      case ADMIN:
        return user.role.id === ADMIN;
      case AUTHOR:
        return user.role.id === AUTHOR;
      case EDITOR:
        return user.role.id === EDITOR;
      default:
        return false;
    }
  }
  return new AuthenticationError('You must be logged in...');
};

const isBlocked = (userId) => {
  if (!userId) throw new AuthenticationError('You must be logged in...');
  return new Promise((res, rej) => {
    prisma.users({
      where: {
        AND: {
          id: userId,
          blocked: true,
        },
      },
    }).then((result) => { res(result.length); })
      .catch((error) => rej(error));
  });
};

export default {
  prisma,
  hasRole,
  isBlocked,
};
