var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let notaA = parseFloat(lines[0]);
let notaB = parseFloat(lines[1]);
let notaC = parseFloat(lines[2]);

let media = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / (2 + 3 + 5);

console.log("MEDIA = " + media.toFixed(1));