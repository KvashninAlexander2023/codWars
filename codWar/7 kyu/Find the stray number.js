// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//хотел сделать так
//
// function stray(numbers) {
//   const newObj = {};
//   let a = numbers.reduce((accumulator, currentValue) => {
//     if (newObj[currentValue]) {
//       newObj[currentValue]++;
//     } else {
//       newObj[currentValue] = 1;
//     }
//   }, numbers[0]);
//   return newObj;
// }

// console.log(stray([1, 1, 2])); // { '1': 2, '2': 1 }

// бот подсказал
function stray(numbers) {
  numbers.sort((a, b) => a - b);
  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  } else {
    return numbers[numbers.length - 1];
  }
}
console.log(stray([1, 1, 2]));


const stray = nums => nums.reduce((a, b) => a ^ b);
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log("Hello!"));
