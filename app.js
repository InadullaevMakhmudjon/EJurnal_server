import express from 'express';
import { join } from 'path';
import { address } from 'ip';
import { createServer } from 'http';
import cors from 'cors';
import server from './src';

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');

app.use(express.static(join(__dirname, '../EJurnal_client/build')));

const http = createServer(app, cors());

server.applyMiddleware({ app });

app.use('/files', express.static('src/files'));

app.get('*', (_, res) => res.sendFile(join(__dirname, '../EJurnal_client/build/index.html')));

http.listen({ port }, () => {
  // eslint-disable-next-line no-console
  console.log('\x1b[36m', `Local:    http://localhost:${port}`);
  // eslint-disable-next-line no-console
  console.log('\x1b[36m', `Neetwork: http://${address()}:${port}`, '\x1b[0m');
});
