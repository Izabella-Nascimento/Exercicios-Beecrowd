const input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let valor = parseFloat(lines[0]);

let valor100 = Math.trunc(valor / 100);
let valor50 = Math.trunc((valor - (valor100 * 100)) / 50);
let valor20 = Math.trunc((valor - ((valor100 * 100) + (valor50 * 50))) / 20);
let valor10 = Math.trunc((valor - ((valor100 * 100) + (valor50 * 50) + (valor20 * 20))) / 10);
let valor5 = Math.trunc((valor - ((valor100 * 100) + (valor50 * 50) + (valor20 * 20) + (valor10 * 10))) / 5);
let valor2 = Math.trunc((valor - ((valor100 * 100) + (valor50 * 50) + (valor20 * 20) + (valor10 * 10) + (valor5 * 5))) / 2);
let valor1 = Math.trunc((valor - ((valor100 * 100) + (valor50 * 50) + (valor20 * 20) + (valor10 * 10) + (valor5 * 5) + (valor2 * 2))) / 1);

console.log(valor);
console.log(valor100 + " nota(s) de R$ 100,00");
console.log(valor50 + " nota(s) de R$ 50,00");
console.log(valor20 + " nota(s) de R$ 20,00");
console.log(valor10 + " nota(s) de R$ 10,00");
console.log(valor5 + " nota(s) de R$ 5,00");
console.log(valor2 + " nota(s) de R$ 2,00");
console.log(valor1 + " nota(s) de R$ 1,00");


