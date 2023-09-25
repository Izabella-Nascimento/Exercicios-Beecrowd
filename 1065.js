var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let evenNumberQuantity = 0;

for(indice = 0; indice < (lines.length - 1); indice++){
  if((lines[indice] % 2) == 0){
    evenNumberQuantity++;
  }
}

console.log(`${evenNumberQuantity} valores pares`);

