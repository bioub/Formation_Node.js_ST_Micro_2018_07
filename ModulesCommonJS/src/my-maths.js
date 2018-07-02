const sum = (a, b) => Number(a) + Number(b);

const multiply = (a, b) => a * b;

// Best practice : Exporter en fin de fichier
exports.sum = sum;
exports.multiply = multiply;