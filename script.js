function sevenHashes () {
  for (var i = 1; i <= 7; i++) {
    var hashes = '';
    for (var j = 1; j <= i; j++) {
      hashes = hashes + '#';
    }
    console.log(hashes);
  }
}
//sevenHashes();
//works

function fizzBuzz () {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
//fizzBuzz();
//works!

function chessBoard (gridSize) {
  if (isNaN(gridSize)) {
    console.log('Not a number');
    return;
  };

  for (var i = 1; i <= gridSize; i++) {
    var gridLine = '';
    if (i % 2 === 1) {
      gridLine += ' ';
    } else {
      gridLine += '#'
    }
    completeLine(gridLine, gridSize);
  }
}

function completeLine (gridLine, gridSize) {
  for (var j = 2; j <= gridSize; j++) {
    if (gridLine[(gridLine.length - 1)] === '#') {
      gridLine += ' ';
    } else {
      gridLine += '#';
    }
  }
  // Looks better when making a full square board
  console.log(gridLine + gridLine);
}

//chessBoard(8);
//works!
