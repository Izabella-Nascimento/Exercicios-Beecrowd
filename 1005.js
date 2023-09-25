var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let notaA = parseFloat(lines[0]);
let notaB = parseFloat(lines[1]);

let media = (notaA * 3.5 + notaB * 7.5) / (3.5 + 7.5);

console.log("MEDIA = " + media.toFixed(5));
