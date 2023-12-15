var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let x;
let y;
let accumulated;
let firstLine = input.split("\n");
let theArray = firstLine.shift();

for(let indice = 0; indice < theArray; indice++){

  accumulated = firstLine.shift().split(" ")
  x = parseInt(accumulated[0]);
  y = parseInt(accumulated[1]);

  if(y == 0){
    console.log("divisao impossivel");
  } else {
    console.log(parseFloat(x / y).toFixed(1));
  }
} 

