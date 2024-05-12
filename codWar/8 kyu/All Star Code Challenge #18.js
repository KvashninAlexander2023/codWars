function strCount(str, letter) {
  const regex = new RegExp("[" + letter + "]", "g");
  const found = str.match(regex);
  if (found === null) return 0;
  return found.length;
}

console.log(strCount("Hello", "o")); //, 1);
console.log(strCount("Hello", "l")); //, 2);
console.log(strCount("", "z")); //, 0);

//best practicies
//str.split(letter).length - 1
