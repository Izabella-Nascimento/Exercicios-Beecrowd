var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let inValues = 0;
let outValues = 0;


for(let index = 1; index <= lines[0]; index++){
  if(lines[index] >= 10 && lines[index] <= 20){
    inValues++;
  } else{
    outValues++;
  }
}

console.log(inValues + " in");
console.log(outValues + " out");