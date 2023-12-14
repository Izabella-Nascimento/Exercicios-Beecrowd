var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

for (indice = 1; indice < lines.length - 1; indice++) {

  if (lines[indice] % 2 === 0 && lines[indice] > 0) {
    console.log("EVEN POSITIVE");
  } else if (lines[indice] % 2 === 0 && lines[indice] < 0) {
    console.log("EVEN NEGATIVE");
  } else if (lines[indice] == parseInt(Math.abs(0))) {
    console.log("NULL");
  } else if (lines[indice] % 2 !== 0 && lines[indice] > 0) {
    console.log("ODD POSITIVE");
  } else if (lines[indice] % 2 !== 0 && lines[indice] < 0) {
    console.log("ODD NEGATIVE");
  }
}

