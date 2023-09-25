var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const horaInicio = parseFloat(firstLine[0]);
const minutoInicio = parseFloat(firstLine[1]);
const horaFim = parseFloat(firstLine[2]);
const minutoFim = parseFloat(firstLine[3]);

const horas = (horaInicio - horaFim);
const minutos = (minutoInicio - minutoFim);

if(horaInicio < horaFim && minutoInicio < minutoFim){
  console.log("O JOGO DUROU " + Math.abs(horas) + " HORA(S) E " + Math.abs(minutos) + " MINUTO(S)");

} else if(horaInicio < horaFim && minutoInicio > minutoFim){
  console.log("O JOGO DUROU " + Math.abs(horas + 1) + " HORA(S) E " + Math.abs((minutos) - 60) + " MINUTO(S)");

} else if(horaInicio < horaFim && minutoInicio == minutoFim){
  console.log("O JOGO DUROU " + Math.abs(horas) + " HORA(S) E " + (minutos) + " MINUTO(S)");

} else if(horaInicio == horaFim && minutoInicio == minutoFim){
  console.log("O JOGO DUROU " + ((horas) + 24) + " HORA(S) E " + (minutos) + " MINUTO(S)");

} else if(horaInicio == horaFim && minutoInicio < minutoFim){
  console.log("O JOGO DUROU " + (horas) + " HORA(S) E " + Math.abs(minutos) + " MINUTO(S)");

} else if(horaInicio == horaFim && minutoInicio > minutoFim){
  console.log("O JOGO DUROU " + ((horas) + 23) + " HORA(S) E " + Math.abs(minutos - 60) + " MINUTO(S)");

} else if(horaInicio > horaFim && minutoInicio < minutoFim){
  console.log("O JOGO DUROU " + Math.abs((horas) - 24) + " HORA(S) E " + Math.abs(minutos) + " MINUTO(S)");

} else if(horaInicio > horaFim && minutoInicio > minutoFim){
  console.log("O JOGO DUROU " + Math.abs(horas - 23) + " HORA(S) E " + Math.abs((minutos) - 60) + " MINUTO(S)");

} else if(horaInicio > horaFim && minutoInicio == minutoFim){
  console.log("O JOGO DUROU " + Math.abs((horas) - 24) + " HORA(S) E " + (minutos) + " MINUTO(S)");
} 

