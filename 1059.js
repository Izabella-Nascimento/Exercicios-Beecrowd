var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let numeroPar = 0;

for (let numeroPar = 2; numeroPar < 101; numeroPar++) {
  if(numeroPar % 2 == 0)
  console.log(numeroPar);
}
