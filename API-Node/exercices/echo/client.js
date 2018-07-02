const { createConnection } = require('net');

const socket = createConnection(1234);

socket.once('connect', () => {
  socket.end(Math.random() + '\n');
});

socket.pipe(process.stdout);
