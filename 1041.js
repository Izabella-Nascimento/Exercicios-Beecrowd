var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const x = parseFloat(firstLine[0]);
const y = parseFloat(firstLine[1]);

if(x > 0 && y > 0){
  console.log("Q1");
} else if(x < 0 && y > 0){
  console.log("Q2");
} else if(x < 0 && y < 0){
  console.log("Q3");
} else if(x > 0 && y < 0){
  console.log("Q4");
} else if(x == 0 && y == 0){
  console.log("Origem");
} else if(y == 0){
  console.log("Eixo X");
} else if(x == 0){
  console.log("Eixo Y");
}

