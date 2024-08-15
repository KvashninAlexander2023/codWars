function factorial(n) {
  if (n < 0 || n > 12)  throw new Error("RangeError");
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));
console.log(factorial(-5));
