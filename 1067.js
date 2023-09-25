var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let oddNumbers = 0;

for(let oddNumbers = 1; oddNumbers <= parseFloat(lines); oddNumbers++){
  if(oddNumbers % 2 != 0){
    console.log(oddNumbers);
  }
}