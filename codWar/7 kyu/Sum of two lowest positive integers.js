// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  const sortNumbers = numbers.sort((a, b) => a - b);

  return sortNumbers[0] + sortNumbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //, 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //, 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //, 10 , "Sum should be 10");
