var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let valorA = parseFloat(lines[0]);
let valorB = parseFloat(lines[1]);
let valorC = parseFloat(lines[2]);
let valorD = parseFloat(lines[3]);

let diferenca = valorA * valorB - valorC * valorD;

console.log("DIFERENCA = " + diferenca);
