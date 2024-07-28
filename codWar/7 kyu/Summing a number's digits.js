function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, el) => {
      return sum + +el;
    }, 0);
}

console.log(sumDigits(99)); //18
