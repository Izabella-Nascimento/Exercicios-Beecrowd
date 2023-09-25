var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let oddNumbersQuantity = 0;

for(let initialNumber = parseFloat(lines[0]); oddNumbersQuantity < 6; initialNumber++){
  if(initialNumber % 2 != 0){
    oddNumbersQuantity++;
    console.log(initialNumber);
  }
}

/*let initialNumber = parseFloat(lines[0]);

while(oddNumbersQuantity <= 6){
  if(initialNumber % 2 != 0){
    oddNumbersQuantity++;
    console.log(initialNumber);
  }
  initialNumber++;
}*/