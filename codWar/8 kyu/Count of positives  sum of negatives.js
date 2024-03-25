function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  let newArray = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      newArray[0] += 1;
    } else if (input[i] < 0) {
      newArray[1] += input[i];
    }
  }
  if (newArray[0] === 0 && newArray[1] === 0) {
    return [];
  }
  return newArray;
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, null, 10, -11, -12, -13, NaN];
let testData2 = null;
let testData3 = [0, 0, 0, 0, 0];
//console.log(countPositivesSumNegatives(testData)); //[8, -50]
//console.log(countPositivesSumNegatives(testData1)); //[8, -50]
//console.log(countPositivesSumNegatives(testData3)); //[8, -50]
console.log(countPositivesSumNegatives(testData2)); //[8, -50]
