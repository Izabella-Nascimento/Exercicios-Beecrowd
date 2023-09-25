var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let A = parseFloat(firstLine[0]);
let B = parseFloat(firstLine[1]);
let C = parseFloat(firstLine[2]);

console.log("TRIANGULO: " + ((A * C) / 2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * (C * C)).toFixed(3));
console.log("TRAPEZIO: " + (((A + B) * C) / 2).toFixed(3));
console.log("QUADRADO: " + (B * B).toFixed(3));
console.log("RETANGULO: " + (A * B).toFixed(3));
