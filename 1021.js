const input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let valor = parseFloat(lines[0]);

let nota100 = Math.trunc(valor / 100);
let nota50 = Math.trunc((valor - (nota100 * 100)) / 50);
let nota20 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50))) / 20);
let nota10 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20))) / 10);
let nota5 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10))) / 5);
let nota2 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5))) / 2);

console.log("NOTAS:");
console.log(nota100 + " nota(s) de R$ 100.00");
console.log(nota50 + " nota(s) de R$ 50.00");
console.log(nota20 + " nota(s) de R$ 20.00");
console.log(nota10 + " nota(s) de R$ 10.00");
console.log(nota5 + " nota(s) de R$ 5.00");
console.log(nota2 + " nota(s) de R$ 2.00");


let moeda1 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2))) / 1);
let moeda50 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1))) / 0.50);
let moeda25 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1) + (moeda50 * 0.50))) / 0.25);
let moeda10 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1) + (moeda50 * 0.50) + (moeda25 * 0.25))) / 0.10);
let moeda05 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1) + (moeda50 * 0.50) + (moeda25 * 0.25) + (moeda10 * 0.10))) / 0.05);
let moeda01 = Math.trunc((valor - ((nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1) + (moeda50 * 0.50) + (moeda25 * 0.25) + (moeda10 * 0.10) + (moeda05 * 0.05))) / 0.01 + 0.01);

console.log("MOEDAS:");
console.log(moeda1 + " moeda(s) de R$ 1.00");
console.log(moeda50 + " moeda(s) de R$ 0.50");
console.log(moeda25 + " moeda(s) de R$ 0.25");
console.log(moeda10 + " moeda(s) de R$ 0.10");
console.log(moeda05 + " moeda(s) de R$ 0.05");
console.log(moeda01 + " moeda(s) de R$ 0.01");