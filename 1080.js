var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


let theBiggestNumber = 0;
let thePosition = 0;

for(let indice = 1; indice <= 100; indice++){
  let theNumber = parseInt(lines[indice]);
  if(theNumber > theBiggestNumber){
    theBiggestNumber = theNumber;
    thePosition = indice + 1;
  }
}

console.log(theBiggestNumber);
console.log(thePosition);







