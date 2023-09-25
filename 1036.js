var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

let a = parseFloat(firstLine[0]);
let b = parseFloat(firstLine[1]);
let c = parseFloat(firstLine[2]);

let delta = (b * b) + ((-4 * a * c));
let raizDeDelta = Math.sqrt(delta);
let denominador = 2 * a;
let r1 = (-b + raizDeDelta) / (denominador);
let r2 = (-b - raizDeDelta) / (denominador);

if (denominador == 0 || delta < 0){
  console.log("Impossivel calcular")
} else {
  console.log("R1 = " + r1.toFixed(5));
  console.log("R2 = " + r2.toFixed(5));
}

