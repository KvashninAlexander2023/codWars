// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
  if (arr.length === 0) {
    return arr;
  }
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }

  const newArr = [];

  newArr.push(Math.min(...arr));
  newArr.push(Math.max(...arr));

  return newArr;
}

//console.log([1, 2, 3, 4, 5])//, [1, 5]],
//console.log([2334454, 5])//, [5, 2334454]],
console.log(minMax([5, 1])); //, [1, 5]]
console.log(minMax([5])); //, [5, 5]]
console.log(minMax([])); //, []]
