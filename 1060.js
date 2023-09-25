var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let positiveQuantity = 0;

for (let indice = 0; indice <= 5; indice++){
    //ou (let indice = 0; indice < lines.length; indice++)
  if(lines[indice] > 0){ 
    positiveQuantity++;
  }
} 
console.log(`${positiveQuantity} valores positivos`);
