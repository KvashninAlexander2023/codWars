// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2

const binaryArrayToNumber = (arr) => {
  let binary = arr.join('');
  let result = parseInt(binary, 2);
  return result;
};

binaryArrayToNumber([0, 0, 0, 1]); //, 1);
binaryArrayToNumber([0, 0, 1, 0]); //, 2);
binaryArrayToNumber([1, 1, 1, 1]); //, 15);
binaryArrayToNumber([0, 1, 1, 0]); //, 6);
