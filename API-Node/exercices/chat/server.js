const { createServer } = require('net');

const clients = new Set();
const server = createServer();

server.on('connection', (socket) => {
  console.log('client connected');

  clients.add(socket);
  console.log(`${clients.size} clients connected`);

  socket.on('data', (data) => {
    clients.forEach((client) => {
      if (client === socket) {
        return;
      }

      client.write(data);
    });
  });

  socket.on('close', () => {
    console.log('client disconnected (close)');
    clients.delete(socket);
  });

  socket.on('end', () => {
    console.log('client disconnected (end)');
    clients.delete(socket);
  });

  socket.on('error', () => {
    console.log('client disconnected (error)');
    clients.delete(socket);
  });
});

server.once('listening', () => {
  console.log('Server started');
});

server.listen(1234);
