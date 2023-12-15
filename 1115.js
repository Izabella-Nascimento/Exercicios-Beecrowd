var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

const coordinates = number => parseInt(number, 10);
let firstLine = input.split("\n").map(coordinates);
let secondLine = input.split(" ").map(coordinates);
secondLine.shift();

for(indice = 0; indice < firstLine.length; indice++){

let x = firstLine[indice]
let y = secondLine[indice];

  if(x > 0 && y > 0){
    console.log("primeiro");
  } else if(x < 0 && y > 0){
    console.log("segundo");
  } else if(x < 0 && y < 0){
    console.log("terceiro");
  } else if(x > 0 && y < 0){
    console.log("quarto");
  } else if(x == 0 || y == 0){
    break;
  }
}


  