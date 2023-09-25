var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const valorA = parseFloat(firstLine[0]);
const valorB = parseFloat(firstLine[1]);

if(valorA % valorB == 0 || valorB % valorA == 0){
  console.log("Sao Multiplos");
} else{
  console.log("Nao sao Multiplos");
}
