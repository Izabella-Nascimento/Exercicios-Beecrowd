const input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let tempo = parseFloat(lines[0]);

let anos = Math.trunc(tempo / 365);
let sobraDivisao = (tempo % 365);
let meses = Math.trunc(sobraDivisao / 30);
let dias = Math.trunc(sobraDivisao % 30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");

