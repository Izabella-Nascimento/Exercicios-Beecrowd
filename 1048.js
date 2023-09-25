var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const salario = parseFloat(firstLine[0]);

let salario400 = salario * 0.15;
let salario800 = salario * 0.12;
let salario1200 = salario * 0.10;
let salario2000 = salario * 0.07;
let salarioAcima2000 = salario * 0.04;

 if(salario <= 400){

  console.log("Novo salario: " + (salario + salario400).toFixed(2));
  console.log("Reajuste ganho: " + salario400.toFixed(2));
  console.log("Em percentual: " + "15 %");

 } else if(salario <= 800){
  console.log("Novo salario: " + (salario + salario800).toFixed(2));
  console.log("Reajuste ganho: " + salario800.toFixed(2));
  console.log("Em percentual: " + "12 %");

 } else if(salario <= 1200){
  console.log("Novo salario: " + (salario + salario1200).toFixed(2));
  console.log("Reajuste ganho: " + salario1200.toFixed(2));
  console.log("Em percentual: " + "10 %");

 } else if(salario <= 2000){
  console.log("Novo salario: " + (salario + salario2000).toFixed(2));
  console.log("Reajuste ganho: " + salario2000.toFixed(2));
  console.log("Em percentual: " + "7 %");
  
 } else if(salario > 2000){
  console.log("Novo salario: " + (salario + salarioAcima2000).toFixed(2));
  console.log("Reajuste ganho: " + salarioAcima2000.toFixed(2));
  console.log("Em percentual: " + "4 %");
 } 


