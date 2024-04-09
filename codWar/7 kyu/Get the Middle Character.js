//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  if (s.length <= 2) {
    return s;
  }

  return s.length % 2
    ? s[(s.length - 1) / 2]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

console.log(getMiddle("test")); //,"es");
console.log(getMiddle("testing")); //,"t");
console.log(getMiddle("middle")); //,"dd");
console.log(getMiddle("A")); //,"A");
console.log(getMiddle("Aa")); //,"A");
