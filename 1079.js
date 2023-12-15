var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

average = parseFloat(lines.shift());

for(let indice = 0; indice < average; indice++){
  let [grade1, grade2, grade3] = lines[indice].split(" ");
  let weightedAverage = ((grade1 * 2) + (grade2 * 3) + (grade3 * 5)) / 10;
  console.log(weightedAverage.toFixed(1));
}