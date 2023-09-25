var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const salarioLisarb = firstLine[0];


let diferenca1De28PorCento = salarioLisarb - 4500;
let diferenca2De28PorCento = (salarioLisarb - diferenca1De28PorCento) - 3000;
let diferenca3De28PorCento = (salarioLisarb - diferenca1De28PorCento - diferenca2De28PorCento) - 2000;

let diferenca1De18PorCento = salarioLisarb - 3000;
let diferenca2De18PorCento = (salarioLisarb - diferenca1De18PorCento) - 2000;

let diferenca1De8PorCento = salarioLisarb - 2000;

if(salarioLisarb > 4500.00){
  console.log("R$ " + ((diferenca1De28PorCento * 0.28) + (diferenca2De28PorCento * 0.18) + (diferenca3De28PorCento * 0.08)).toFixed(2));

} else if(salarioLisarb > 3000.01 && salarioLisarb <= 4500.00){
  console.log("R$ " + ((diferenca1De18PorCento * 0.18) + (diferenca2De18PorCento * 0.08)).toFixed(2));

} else if(salarioLisarb > 2000.01 && salarioLisarb <= 3000.00){
  console.log("R$ " + (diferenca1De8PorCento * 0.08).toFixed(2));

} else if(salarioLisarb <= 2000.00){
  console.log("Isento");
}





