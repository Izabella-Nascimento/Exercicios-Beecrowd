var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let valor1 = parseFloat(lines[0]);
let valor2 = parseFloat(lines[1]);

console.log("PROD = " + valor1 * valor2);
