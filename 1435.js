var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


for(let line = 0; line < lines.length; line++){
  for(let column = 0; column < lines.length; column++){
    let up = line;
    let down = (lines.length - 1) - line;
    let left = column;
    let right = (lines.length - 1) - column;

    let minor = Math.min(up + down + left + right);

    lines[line][column] = minor;
  }
}

console.log(lines);