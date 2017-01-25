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
    console.log((!(i % 3) && !(i % 5)) ? 'FizzBuzz' : (!(i % 3)) ? 'Fizz' : (!(i % 5)) ? 'Buzz' : i);
    
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   console.log('Fizz');
    // } else if (i % 5 === 0) {
    //   console.log('Buzz');
    // } else {
    //   console.log(i);
    // }
  }
}
fizzBuzz();
//works!

function chessBoard (gridSize) {
  if (isNaN(gridSize)) {
    console.log('Not a number');
    return;
  };

  makeBoard(gridSize);
}

function makeBoard(gridSize) {
  for (var i = 1; i <= gridSize; i++) {
    var gridLine = startLine(i);
    console.log(completeLine(gridLine, gridSize));
  }
}

function startLine(i) {
  return (i % 2) ? ' ' : '#';
}

function completeLine (gridLine, gridSize) {
  for (var j = 2; j <= gridSize; j++) {
    gridLine += (gridLine[(gridLine.length -1)] === '#') ? ' ' : '#';
  }
  return gridLine;
}

//chessBoard(6);
//works!
