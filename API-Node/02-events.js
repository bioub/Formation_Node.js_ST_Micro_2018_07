const { EventEmitter } = require('events');

const ee = new EventEmitter();

function createUser(user) {

  // TODO stocker l'objet user

  ee.emit('user.created', user);

}

// Dans un projet qui se sert de createUser
ee.on('user.created', (user) => {
  // TODO envoyer un email (npm -> nodemailer)

  // event sync
  console.log('Mail sent to ' + user.email + ' (sync)');

  // event async macrotask (au le prochain passage de l'event loop)
  // setImmediate / setTimeout
  setImmediate(() => {
    console.log('Mail sent to ' + user.email + ' (macrotask)');
  });

  // event async microtask (avant le prochain passage de l'event loop)
  // process.nextTick / Promise.resolve
  process.nextTick(() => {
    console.log('Mail sent to ' + user.email + ' (microtask)');
  });

});

createUser({
  firstName: 'Romain',
  email: 'romain.bohdanowicz@gmail.com',
});

console.log('Fin');

/*
while (true) {
  let nextCb;
  while(nextCb = getNextCbTimer()) {
    cb();

    // Promesses / process.nextTick()
    while (microtask = getNextMicroTask()) {

    }
  }

  while(nextCb = getNextCbIo()) {
    cb();
  }

  while(nextCb = getNextCb()) {
    cb();
  }
}



*/
