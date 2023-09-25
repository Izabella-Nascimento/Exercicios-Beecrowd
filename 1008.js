var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let numeroDoFuncionario = parseFloat(lines[0]);
let horasTrabalhadas = parseFloat(lines[1]);
let valorRecebidoPorHora = parseFloat(lines[2]);

let salario = horasTrabalhadas * valorRecebidoPorHora;

console.log("NUMBER = " + numeroDoFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
