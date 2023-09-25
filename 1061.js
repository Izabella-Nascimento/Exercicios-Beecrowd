var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

let initialDay = parseInt(lines[0].split(" ")[1]);
let initialHour = parseInt(lines[1].split(" : ")[0]);
let initialMinutes = parseInt(lines[1].split(" : ")[1]);
let initialSeconds = parseInt(lines[1].split(" : ")[2]);

let finalDay = parseInt(lines[2].split(" ")[1]);
let finalHour = parseInt(lines[3].split(" : ")[0]);
let finalMinutes = parseInt(lines[3].split(" : ")[1]);
let finalSeconds = parseInt(lines[3].split(" : ")[2]);


let startOfTheEvent = new Date(2023, 3, initialDay, initialHour, initialMinutes, initialSeconds);
let endOfTheEvent = new Date(2023, 3, finalDay, finalHour, finalMinutes, finalSeconds);

let differenceOfTheDates = (endOfTheEvent - startOfTheEvent);

let days = Math.trunc(differenceOfTheDates / 86400000);
let hours = Math.trunc(differenceOfTheDates / 3600000) % 24;
let minutes = Math.trunc(differenceOfTheDates / 60000) % 60;
let seconds = Math.trunc(differenceOfTheDates / 1000) % 60;

console.log(days + " dia(s)");
console.log(hours + " hora(s)");
console.log(minutes + " minuto(s)");
console.log(seconds + " segundo(s)");