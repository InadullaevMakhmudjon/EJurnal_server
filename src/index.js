import { ApolloServer } from 'apollo-server-express';
import { prisma } from '../prisma/generated/prisma-client';
import makeAuth from './auth';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

require('dotenv').config();

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV !== 'production',
  context: ({ req }) => makeAuth({ req, prisma }),
});
