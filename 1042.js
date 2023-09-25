var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const valor1 = parseFloat(firstLine[0]);
const valor2 = parseFloat(firstLine[1]);
const valor3 = parseFloat(firstLine[2]);


if(valor1 < valor2 && valor2 < valor3){
  console.log(valor1);
  console.log(valor2);
  console.log(valor3);
} else if(valor1 < valor3 && valor3 < valor2){
  console.log(valor1);
  console.log(valor3);
  console.log(valor2);
} else if(valor2 < valor1 && valor1 < valor3){
  console.log(valor2);
  console.log(valor1);
  console.log(valor3);
} else if(valor2 < valor3 && valor3 < valor1){
  console.log(valor2);
  console.log(valor3);
  console.log(valor1);
} else if(valor3 < valor1 && valor1 < valor2){
  console.log(valor3);
  console.log(valor1);
  console.log(valor2);
} else if(valor3 < valor2 && valor2 < valor1){
  console.log(valor3);
  console.log(valor2);
  console.log(valor1);
}

console.log();
console.log(valor1);
console.log(valor2);
console.log(valor3);
