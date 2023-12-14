var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let j = 60;

for(let i = 1; j >= 0; i += 3){
    console.log("I=" + i + " J=" + j);
    j -= 5;
  }








