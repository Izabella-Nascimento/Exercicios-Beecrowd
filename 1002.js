var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let raio = parseFloat(lines[0]);

let pi = 3.14159;

console.log("A=" + (pi * (raio * raio)).toFixed(4));
