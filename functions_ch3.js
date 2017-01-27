function findMin (a, b) {
  return (a <= b) ? a : b;
}
// works

function isEven (num) {
  if (num < 0) {
    console.log('Input a positive integer.');
  } else if (num == 0) {
    console.log('true');
  } else if (num == 1) {
    console.log('false');
  } else {
    isEven(num - 2);
  }
}
// works

function countBs (str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'B') {
      count++;
    }
  }
  console.log('Total B\'s', count);
}
// works

function countChar (str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  console.log('Total ' + char + '\'s: ', count);
}
// works
