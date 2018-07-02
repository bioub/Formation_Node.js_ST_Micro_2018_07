const { createServer } = require('net');

const server = createServer();

server.on('connection', (socket) => {
  socket.pipe(socket);
});

server.on('listening', () => {
  console.log('Server started');
});

server.listen(1234);
