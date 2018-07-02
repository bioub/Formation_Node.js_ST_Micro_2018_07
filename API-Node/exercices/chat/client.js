const { createConnection } = require('net');
const { createInterface } = require('readline');
const socket = createConnection(1234);

socket.once('connect', () => {
  console.log('Client connected');
  const rl = createInterface({
    input: process.stdin,
  });

  rl.on('line', (line) => {
    socket.write(line + '\n');
  });
});

socket.pipe(process.stdout);
