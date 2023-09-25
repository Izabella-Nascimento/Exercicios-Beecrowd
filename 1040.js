var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");
/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

const firstLine = lines[0].split(" ");

const nota1 = parseFloat(firstLine[0]);
const nota2 = parseFloat(firstLine[1]);
const nota3 = parseFloat(firstLine[2]);
const nota4 = parseFloat(firstLine[3]);

const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / (2 + 3 + 4 + 1);

console.log("Media: " + media.toFixed(1));

if (media >= 7.0){
  console.log("Aluno aprovado.");
} else if (media < 5.0){
  console.log("Aluno reprovado.");
} else if (media >= 5.0 && media <= 6.9){
  const secondLine = lines[1].split(" ");
  const nota5 = parseFloat(secondLine[0]);
  
  const mediaFinal = (media + nota5) / 2;
  
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + nota5.toFixed(1));
    if(mediaFinal >= 5.0){
      console.log("Aluno aprovado.");
      console.log("Media final: " + mediaFinal.toFixed(1));
    } else{
      console.log("Aluno reprovado.");
      console.log("Media final: " + mediaFinal.toFixed(1));
    }
}





