var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


  let b = parseInt(lines[0]);

  for(let cont = 1; cont <= b; cont++){
    let [x, y] = lines[cont].split(" ").map(Number);
    let comparison = y > x;
    let sumOfNumbers = 0;

    for(let z = (comparison ? x : y) + 1; z < (comparison ? y : x); z++){
      if(z % 2 !== 0){
        sumOfNumbers += z;
      }
    }

    console.log(sumOfNumbers);
  }
