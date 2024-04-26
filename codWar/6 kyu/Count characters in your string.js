//description

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

//solution

function count(string) {
  const countValue = {};

  if (!string) return countValue;

  string.split("").forEach((el) => {
    // if (Object.keys(countValue).includes(el)) {
    if (el in countValue) {
      countValue[el] += 1;
    } else {
      countValue[el] = 1;
    }
  });

  return countValue;
}

console.log(count("", {})); //;
console.log(count("a", { a: 1 })); //;
console.log(count("ab", { a: 1, b: 1 })); //;
console.log(count("aba", { a: 2, b: 1 })); //;
console.log(count("ABC", { A: 1, B: 1, C: 1 })); //;
