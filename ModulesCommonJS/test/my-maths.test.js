const assert = require('assert'); // binaire Node.js (lib/assert)
const chalk = require('chalk'); // node_modules/chalk
const myMaths = require('../src/my-maths'); // dans le projet (relatif à ce fichier)

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  console.log(chalk.green('TEST OK'));
}
catch (err) {
  console.log(chalk.red('TEST KO'));
}