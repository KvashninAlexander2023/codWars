const isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  let result = Math.pow(n, 1 / 2);
  return result % 1 === 0;
};

console.log(isSquare(-1)); //, false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0)); //, true, "0 is a square number (0 * 0)");
console.log(isSquare(3)); //, false, "3 is not a square number");
console.log(isSquare(4)); //, true, "4 is a square number (2 * 2)");
console.log(isSquare(25)); //, true, "25 is a square number (5 * 5)");
console.log(isSquare(26)); //, false, "26 is not a square number");console.lg
//console.log(Math.pow(944444448, 0.5)); //true
