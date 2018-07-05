const cluster = require('cluster');
const http = require('http')
const app = require('./app');
const config = require('./config');
const mongoose = require('mongoose');
const numCPUs = require('os').cpus().length;



if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);


  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

  mongoose.connect('mongodb://localhost/test');

  const server = http.createServer(app);

  server.on('error', (err) => {
    console.log(err);
  });

  server.listen(config.port, () => {
    console.log('Server started on port ' + config.port);
  });

}
