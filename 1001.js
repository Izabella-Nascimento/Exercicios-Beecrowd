var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha

//obtem o primeiro valor do arquivo stdin
let a = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
let b = parseFloat(lines[1]);

console.log("X = " + (a + b)); 