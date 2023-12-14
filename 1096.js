var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let j = [7, 6, 5];
let indice = 0;
let i = 1;

for(let cont = 0; cont < 15; cont++){
  if(cont > 0 && cont % 3 == 0){
    i += 2
  }
  console.log("I=" + i + " J=" + j[indice]);
  
  if(indice + 1 < 3){
    indice = indice + 1;
  } else {
    indice = 0;
  }
}

