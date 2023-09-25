var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let codigo = parseFloat(firstLine[0]);
let quantidade = parseFloat(firstLine[1]);


if (codigo == 1){
  console.log("Total: R$ " + (quantidade * 4.00).toFixed(2));
} else if (codigo == 2){
  console.log("Total: R$ " + (quantidade * 4.50).toFixed(2));
} else if (codigo == 3){
  console.log("Total: R$ " + (quantidade * 5.00).toFixed(2));
} else if (codigo == 4){
  console.log("Total: R$ " + (quantidade * 2.00).toFixed(2));
} else if (codigo == 5){
  console.log("Total: R$ " + (quantidade * 1.50).toFixed(2));
};

