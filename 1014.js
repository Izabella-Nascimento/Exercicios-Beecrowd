var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let distanciaPercorrida = parseFloat(lines[0]);
let combustivelGasto = parseFloat(lines[1]);

console.log((distanciaPercorrida / combustivelGasto).toFixed(3) + " km/l");
