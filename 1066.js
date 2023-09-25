var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let evenNumberQuantity = 0;
let oddNumberQuantity = 0;
let positiveNumbers = 0;
let negativeNumbers = 0;

for(indice = 0; indice < lines.length - 1; indice++){
  if(lines[indice] % 2 == 0){
    evenNumberQuantity++;
  } else {
    oddNumberQuantity++; 
  } 
  
  if (lines[indice] > 0){
    positiveNumbers++;
  } else if (lines[indice] < 0 && lines[indice] != 0){
    negativeNumbers++;
  } 
}

console.log(`${evenNumberQuantity} valor(es) par(es)`);
console.log(`${oddNumberQuantity} valor(es) impar(es)`);
console.log(`${positiveNumbers} valor(es) positivo(s)`);
console.log(`${negativeNumbers} valor(es) negativo(s)`);