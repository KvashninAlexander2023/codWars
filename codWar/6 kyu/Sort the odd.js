// Solution
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Deskription

function sortArray(array) {
  let newArray = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  array.forEach((num, i) => {
    if (num % 2 === 0) {
      newArray.splice(i, 0, num);
    }
  });

  return newArray;
}

// Best practices
//
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }


console.log(sortArray([5, 3, 2, 8, 1, 4])); //, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0])); //, [1, 3, 5, 8, 0]);
console.log(sortArray([])); //,[]);
console.log(sortArray([1, 11, 2, 8, 3, 4, 5])); //[ 1, 3, 2, 8, 5, 4, 11 ]))
