/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import path from 'path';
import * as jsonServer from 'json-server';

// const app = express();
// server.js
const app = jsonServer.create() as express.Application;
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, 'assets','db.json'));

console.log(path.join(__dirname, './assets/db.json'));

app.use(middlewares);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to blog-api!', extra: 'Placki!' });
});
app.use(router);

const port = process.env.port || 9000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
