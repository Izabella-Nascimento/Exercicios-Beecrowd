var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let ho = "";
let repetitions = lines[0];


for(let index = 1; index <= repetitions; index++){
  ho += "Ho";
  if(index < repetitions){
    ho += " " ;
  } else{
    ho += "!"
  }
}

console.log(ho);


