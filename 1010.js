var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let codigoDePecaUm = parseFloat(firstLine[0]);
let numeroDePecaUm = parseFloat(firstLine[1]);
let valorUnitarioUm = parseFloat(firstLine[2]);

const secondLine = lines[1].split(" ");

let codigoDePecaDois = parseFloat(secondLine[0]);
let numeroDePecaDois = parseFloat(secondLine[1]);
let valorUnitarioDois = parseFloat(secondLine[2]);

let valorAPagar = numeroDePecaUm * valorUnitarioUm + numeroDePecaDois * valorUnitarioDois;

console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2));
