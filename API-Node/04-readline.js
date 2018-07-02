// ReadableStream : méthodes read... (ex: process.stdin)
// WriteableStream : méthodes write... (ex: process.stdout)
// Duplex Stream : ReadableStream et WriteableStream (ex: socket)
// Transform : transforme la data entre l'entrée et la sortie (ex: gzip)


const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream(path.resolve(__dirname, '.editorconfig')),
});

let number = 0;
rl.on('line', (line) => {
  console.log(`Line ${++number} : ${line}`);
});
