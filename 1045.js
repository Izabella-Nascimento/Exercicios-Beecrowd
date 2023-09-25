var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const [a, b, c] = lines.shift().split(" ").map((valores) => Number(valores)).sort((a, b) => (b - a));
/*  O método .map pega os valores a, b e c do array e os transforma em números, já que o método 
.sort organiza os valores em ordem decrescente, transformando-os em strings (então o .map inverte 
isso, tornando-os números). "Valores" é o novo nome do array a, b, c. A parte: .sorte(a, b) está
passando parâmetros, a parte (b - a) é onde estou dizendo que é para ordenar em decrescente os
valores (estranho, mas é assim que faz. Se fosse em ordem crescente seria: a - b).
*/

if(a >= (b + c)){
  console.log("NAO FORMA TRIANGULO");
} else if(a * a == ((b * b) + (c * c))){
  console.log("TRIANGULO RETANGULO");

  if(a === b && b === c){
    console.log("TRIANGULO EQUILATERO");
  } else if(a === b && b !== c || b === c && c !== a || c === a && a !== b){
    console.log("TRIANGULO ISOSCELES");
  }
} else if((a * a) > ((b * b) + (c * c))){
  console.log("TRIANGULO OBTUSANGULO")

  if(a === b && b === c){
    console.log("TRIANGULO EQUILATERO");
  } else if(a === b && b !== c || b === c && c !== a || c === a && a !== b){
    console.log("TRIANGULO ISOSCELES");
  }
} else if((a * a) < ((b * b) + (c * c))){
  console.log("TRIANGULO ACUTANGULO")
  
  if(a === b && b === c){
    console.log("TRIANGULO EQUILATERO");
  } else if(a === b && b !== c || b === c && c !== a || c === a && a !== b){
    console.log("TRIANGULO ISOSCELES");
  }
}
