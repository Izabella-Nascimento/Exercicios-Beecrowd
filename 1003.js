var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

console.log("SOMA = " + (A + B));
