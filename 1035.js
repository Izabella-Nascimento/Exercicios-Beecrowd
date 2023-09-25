var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let a = parseFloat(firstLine[0]);
let b = parseFloat(firstLine[1]);
let c = parseFloat(firstLine[2]);
let d = parseFloat(firstLine[3]);

if (((b > c) && (d > a)) && ((c + d) > (a + b)) && ((c > 0) && (d > 0)) && ((a % 2 == 0))){
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
};

