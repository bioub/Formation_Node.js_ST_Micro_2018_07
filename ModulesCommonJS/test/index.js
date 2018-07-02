const fs = require('fs');

fs.readdirSync(__dirname)
  .filter((file) => file.endsWith('.test.js'))
  .forEach((file) => require(`./${file}`));
