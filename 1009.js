var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let nomeDoVendedor = parseFloat(lines[0]);
let salarioFixo = parseFloat(lines[1]);
let totalDeVendas = parseFloat(lines[2]);

let comissao = totalDeVendas * 0.15;

console.log("TOTAL = R$ " + (comissao + salarioFixo).toFixed(2));
