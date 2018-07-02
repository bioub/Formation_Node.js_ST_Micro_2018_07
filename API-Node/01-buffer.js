const fs = require('fs');
const path = require('path');

const bufferFromStr = Buffer.from('Hello', 'utf-8');

const bufferFromFile = fs.readFileSync(path.resolve(__dirname, '.editorconfig'));

console.log(bufferFromFile.toString('ascii'));

