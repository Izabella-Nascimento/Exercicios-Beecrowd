var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let multiplicationTable = 10;
let value = lines[0];


for(let index = 1; index <= multiplicationTable; index++){
  let result = index * value;
  console.log(index + " x " + value + " = " + result);
}




