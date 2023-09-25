var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const valorA = parseFloat(firstLine[0]);
const valorB = parseFloat(firstLine[1]);
const valorC = parseFloat(firstLine[2]);

const perimetro = valorA + valorB + valorC;
const area = ((valorA + valorB) * valorC) / 2;

if(valorA == (valorB + valorC) || valorB == (valorA + valorC) || valorC == (valorB + valorA)){
  console.log("Area = " + area.toFixed(1));
} else if(valorA < (valorB + valorC)){
  console.log("Perimetro = " + perimetro.toFixed(1));
} else if(valorB < (valorA + valorC)){
  console.log("Perimetro = " + perimetro.toFixed(1));
} else if(valorC < (valorB + valorA)){
  console.log("Perimetro = " + perimetro.toFixed(1));
}

