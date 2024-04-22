// description
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//solution

function fakeBin(x) {
  newString = "";
  x.split("").forEach((el) => {
    if (el >= 5) {
      newString += 1;
    } else newString += 0;
  });
  return newString;
}

//best practices
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

console.log(fakeBin("45385593107843568")); //, '01011110001100111');
console.log(fakeBin("509321967506747")); //, '101000111101101');
