var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let x;
let y;
let firstLine = input.split("\n").map(conversion);
let secondLine = input.split(" ").map(conversion);
secondLine.shift();

for(indice = 0; indice < firstLine.length; indice++){
  x = firstLine[indice];
  y = secondLine[indice];

  if (x == y){
    break;
  } else if (x > y){
    console.log("Decrescente");
  } else {
    console.log("Crescente");
  }
}

function conversion(value){
  return parseInt(value, 10);
}
