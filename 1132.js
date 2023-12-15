var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let firstLine = input.split("\n");
let x = parseInt(firstLine.shift());
let y = parseInt(firstLine.shift());
let divisibleSum = 0;
let firstNumber = x;
let secondNumber= y;

if(x > y){
  firstNumber = y;
  secondNumber = x;
}

for(let indice = firstNumber; indice <= secondNumber; indice++){
  if(indice % 13 !== 0){
    divisibleSum += indice;
  }
}

console.log(divisibleSum);