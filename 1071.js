var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let sumOfNumbers = 0;

for(let firstNumber = parseFloat(lines[0]); parseFloat(lines[1]) < firstNumber; firstNumber--){
  if(firstNumber % 2 != 0 && firstNumber != lines[0]){
    sumOfNumbers += firstNumber;
  }
}

console.log(sumOfNumbers);