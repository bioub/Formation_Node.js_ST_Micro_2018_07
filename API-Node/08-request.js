const request = require('request');

request.get('http://www.google.fr/', (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  console.log(body);
});

/*

const socket = net.createConnection(80, 'www.google.fr');

socket.once('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.end('\r\n');
});


socket.on('error', (err) => {
  console.log(err);
});

//socket.pipe(process.stdout);

socket.on('data', (data) => {
  process.stdout.write(data.toString())
});

*/
