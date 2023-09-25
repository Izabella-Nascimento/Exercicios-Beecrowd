var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let distancia = parseFloat(lines[0]);

let tempo = distancia * 2;

console.log(tempo + " minutos");