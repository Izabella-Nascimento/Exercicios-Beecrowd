var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let firstLine = input.split("\n").map(parseFloat);
let theArrayS = firstLine.length;
let totalValidGrades;
let theArray;
let firstTest;
let secondTest;

function invalidNote(grade){
  if(grade < 0 || grade > 10){
    return console.log("nota invalida");
  }
}

firstTest = firstLine.find(grade => grade > 0 && grade <= 10);
theArray = firstLine.filter(function (grade){
  return grade != firstTest
});

secondTest = theArray.find(grade => grade > 0 && grade <= 10);
let indice = 0;

while(indice < theArrayS){
  invalidNote(firstLine[indice]);
  indice++; 
}

firstTest = firstTest / 2;
secondTest = secondTest / 2;
totalValidGrades = firstTest + secondTest;

console.log("media = " + totalValidGrades.toFixed(2));


