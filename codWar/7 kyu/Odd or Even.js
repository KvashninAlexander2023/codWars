
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  if(array.length === 0){
    return 'even'
  }
 return array.reduce((acc, value)=>acc+value,0)%2 != 0 ? 'odd' : 'even'
}

// console.log(oddOrEven([1023, 1, 3]));

// return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';