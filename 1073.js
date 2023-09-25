var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let power = 0;

for(let index = 1; index <= (lines[0]); index++){
  if(index % 2 == 0){ 
    power = index ** 2;
    console.log(index + "^2 = " + power);
  }
}

