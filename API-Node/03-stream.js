// ReadableStream : méthodes read... (ex: process.stdin)
// WriteableStream : méthodes write... (ex: process.stdout)
// Duplex Stream : ReadableStream et WriteableStream (ex: socket)
// Transform : transforme la data entre l'entrée et la sortie (ex: gzip)


const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const rs = fs.createReadStream(path.resolve(__dirname, '.editorconfig'));
const ws = fs.createWriteStream(path.resolve(__dirname, '.editorconfig.gz'));

const gzipFromEditorConfig = rs.pipe(gzip);

gzipFromEditorConfig
  .pipe(process.stdout) // dans la console

gzipFromEditorConfig
  .pipe(ws) // dans le fichier .editorconfig.gz

// cat .editorconfig | echo
