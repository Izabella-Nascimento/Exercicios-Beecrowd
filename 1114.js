var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


while(true){
  let password = parseInt(lines.shift());
  if(password !== 2002){
    console.log("Senha Invalida");
  } else {
    console.log("Acesso Permitido");
    break;
  }
}
  
