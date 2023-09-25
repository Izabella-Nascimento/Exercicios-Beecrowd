const input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let tempo = parseFloat(lines[0]);

let horas = Math.trunc(tempo / 3600);
let sobraDivisao = (tempo % 3600);
let minutos = Math.trunc(sobraDivisao / 60);
let segundos = Math.trunc(sobraDivisao % 60);

if (tempo >= 60){
  console.log(horas + ":" + minutos + ":" + segundos);
} else if (tempo <= 59){
  console.log(0 + ":" + 0 + ":" + tempo);
};

