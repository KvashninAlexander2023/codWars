//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(value) {
  if (!value) return [];
  const output = [];
  let prev = value[0];
  output.push(value[0]);
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== prev) {
      output.push(value[i]);
      prev = value[i];
    }
  }
  return output;
}

// console.log(uniqueInOrder([1,2,2,3,3]));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
