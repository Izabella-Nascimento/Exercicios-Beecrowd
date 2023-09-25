var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let A = parseFloat(firstLine[0]);
let B = parseFloat(firstLine[1]);
let C = parseFloat(firstLine[2]);

if (A > (B && C)) {
  console.log(A + " eh o maior");
} else if (B > (A && C)) {
  console.log(B + " eh o maior");
} else if (C > (B && A)) {
  console.log(C + " eh o maior");
}
