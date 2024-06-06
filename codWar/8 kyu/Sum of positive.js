// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr) {
    return arr.reduce((sum, num) => (num > 0 ? num + sum : sum), 0);
  } else {
    return 0;
  }
}

console.log(positiveSum([1, -2, 3, 4, 5])); //,13););
