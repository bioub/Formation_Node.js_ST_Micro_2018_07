const http = require('http');

const req = http.request({
  host: 'www.google.fr',
  port: 80,
  method: 'GET',
  path: '/',
  headers: {
    Host: 'www.google.fr',
  },
});


req.once('response', (res) => {
  let str = '';
  res.on('data', (data) => {
    str += data.toString();
  });

  res.once('end', () => {
    console.log(str);
  });
});

req.end(); // obligatoire
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
