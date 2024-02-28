function countPositivesSumNegatives(input) {
  let newArray = [0, 0];
  input.forEach((e) => {
    if (e >= 0) {
      newArray[0] += e;
    } else {
      newArray[1] += e;
    }
  });
  return newArray;
}
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData)); //[8, -50]
