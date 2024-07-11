// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  const num = Math.sqrt(sq);
  if (num % 1 !== 0) {
    return -1;
  } else {
    return Math.pow(num + 1, 2);
  }
}

// console.log(13*13);

console.log(Math.sqrt(144) % 1);
