function pipeFix(numbers) {
  let newArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    console.log("s");
    newArr.push(i);
  }
  return newArr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
