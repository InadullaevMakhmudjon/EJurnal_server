import { verify } from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

const getUser = (token) => {
  try {
    if (token) {
      return verify(token, process.env.JWT_KEY);
    }
    return null;
  } catch (err) {
    return null;
  }
};

export default ({ req, isBlocked, ...others }) => {
  const tokenWithBearer = req.headers.authorization || '';
  const token = tokenWithBearer.split(' ')[1];
  const { userId } = getUser(token) || {};
  return {
    ...others,
    auth: async () => {
      if (await isBlocked(userId)) throw new AuthenticationError('You are blocked');
      if (userId) return userId;
      throw new AuthenticationError('You must be logged in...');
    },
  };
};
