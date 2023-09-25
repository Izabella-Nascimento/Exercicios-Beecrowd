var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let tempoGasto = parseFloat(lines[0]);
let velocidadeMedia = parseFloat(lines[1]);

let litrosNecessarios = (tempoGasto * velocidadeMedia) / 12;

console.log(litrosNecessarios.toFixed(3));