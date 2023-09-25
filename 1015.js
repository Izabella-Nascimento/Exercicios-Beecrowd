var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let x1 = parseFloat(firstLine[0]);
let y1 = parseFloat(firstLine[1]);

const secondLine = lines[1].split(" ");

let x2 = parseFloat(secondLine[0]);
let y2 = parseFloat(secondLine[1]);

distancia = ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
raiz = Math.sqrt(distancia);

console.log(raiz.toFixed(4));



