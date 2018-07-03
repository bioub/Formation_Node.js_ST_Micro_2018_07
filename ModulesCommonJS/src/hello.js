// (function (exports, require, module, __filename, __dirname) {
  'use strict';

const hello = (firstName) => `Hello ${firstName} !`;

// exports.hello = hello; // extension de l'objet exports

module.exports = hello; // remplacement du retour de require

// });
