var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
const firstLine = lines[0].split(" ");

const horaInicio = parseFloat(firstLine[0]);
const horaFim = parseFloat(firstLine[1]);

if(horaInicio > horaFim){
  console.log("O JOGO DUROU " + Math.abs((horaInicio - horaFim) - 24) + " HORA(S)");
} else if(horaInicio == horaFim){
  console.log("O JOGO DUROU " + ((horaInicio - horaFim) + 24) + " HORA(S)");
} else if(horaInicio < horaFim){
  console.log("O JOGO DUROU " + Math.abs(horaInicio - horaFim) + " HORA(S)");
}


