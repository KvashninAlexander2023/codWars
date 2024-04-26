//solution
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//description

function squareSum(numbers) {
  return numbers.reduce((accumulator, item, index, array) => {
    return (accumulator += Math.pow(item, 2));
  }, 0);
}

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

console.log(squareSum([1, 2])); //, 5);
console.log(squareSum([0, 3, 4, 5])); //, 50);
console.log(squareSum([])); //, 0);

