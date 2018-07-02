const { createServer } = require('net');

const server = createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout); // REQUETE HTTP
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');
  socket.end(); // obligatoire
});

server.on('error', (err) => {
  console.log(err);
});

server.once('listening', () => {
  console.log('Server started');
});

server.listen(8080);
