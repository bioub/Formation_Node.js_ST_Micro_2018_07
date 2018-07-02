const { createConnection } = require('net');

const socket = createConnection(1234);

socket.once('connect', () => {
  socket.on('data', (data) => {
    process.stdout.write('\033c '); // clear screen
    console.log('Uptime', data.toString());
  });
});
