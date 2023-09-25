var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let raio = parseFloat(lines[0]);

let volume = (4 / 3) * 3.14159 * (raio * raio * raio);

console.log("VOLUME = " + volume.toFixed(3));
