var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const ddd = parseFloat(firstLine[0]);


if(ddd == 61){
  console.log("Brasilia")
} else if(ddd == 71){
  console.log("Salvador")
} else if(ddd == 11){
  console.log("Sao Paulo")
} else if(ddd == 21){
  console.log("Rio de Janeiro")  
} else if(ddd == 32){
  console.log("Juiz de Fora")  
}  else if(ddd == 19){
  console.log("Campinas")  
}  else if(ddd == 27){
  console.log("Vitoria") 
}  else if(ddd == 31){
  console.log("Belo Horizonte")  
} else {
  console.log("DDD nao cadastrado");
}  
