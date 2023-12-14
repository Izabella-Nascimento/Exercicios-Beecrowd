var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let valueN = lines[0];

for(let index = 1; index <= 10000; index++){
  if(index % valueN == 2){
    console.log(index);
  }
}