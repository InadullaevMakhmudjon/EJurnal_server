import { ApolloServer } from 'apollo-server-express';
import sources from './sources';
import makeAuth from './auth';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

require('dotenv').config();

/**
 * All Auth required methods are asynchronous, and we should await it.
 * Because every call, we check whether the user blocked or no,
 * To check the user, we need access to the database.
 * There is no way to get data from database without asynchronous.
 * Even it is not so convinent to put async await on every method,
 * We have to, for blocking logic. ☺
 */

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV !== 'production',
  context: ({ req }) => makeAuth({ req, ...sources }),
});
