var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let subfilo = (lines[0]);
let classe = (lines[1]);
let alimentacao = (lines[2]);

if(subfilo == "vertebrado" && classe == "ave" && alimentacao == "carnivoro"){
  console.log("aguia");

} else if(subfilo == "vertebrado" && classe =="ave" && alimentacao == "onivoro"){
  console.log("pomba");

} else if((subfilo == "vertebrado") && (classe == "mamifero") && (alimentacao == "onivoro")){
  console.log("homem");

} else if(subfilo == "vertebrado" && classe == "mamifero" && alimentacao == "herbivoro"){
  console.log("vaca");

} else if(subfilo == "invertebrado" && classe == "inseto" && alimentacao == "hematofago"){
  console.log("pulga");

} else if(subfilo == "invertebrado" && classe == "inseto" && alimentacao == "herbivoro"){
  console.log("lagarta");

} else if(subfilo == "invertebrado" && classe == "anelideo" && alimentacao == "hematofago"){
  console.log("sanguessuga");

} else if(subfilo == "invertebrado" && classe == "anelideo" && alimentacao == "onivoro"){
  console.log("minhoca");
}
