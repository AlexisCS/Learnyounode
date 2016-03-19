var fs = require('fs');
fs.readFileSync (process.argv[2]);
var buffer = fs.readFileSync (process.argv[2]);

var casting = buffer.toString();

casting.split ('\n');

var contador = casting.split('\n').length - 1;

console.log (contador);

