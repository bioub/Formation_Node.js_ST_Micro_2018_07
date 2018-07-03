const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end(); // obligatoire
});

/*
server.on('request',
/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
/*
(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end(); // obligatoire
});
*/

server.on('error', (err) => {
  console.log(err);
});

server.once('listening', () => {
  console.log('Server started');
});

server.listen(8080);
