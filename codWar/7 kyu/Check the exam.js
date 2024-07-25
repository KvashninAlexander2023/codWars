function checkExam(array1, array2) {
  let currentNum = 0;
  for (let i = 0; i < array2.length; i++) {
    if (!array2[i]){
      continue
    } else if (array2[i] === array1[i]) currentNum += 4;
    else {
      currentNum -= 1;
    }
  }
  return currentNum > 0 ? currentNum : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //, 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); //, 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); //, 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); //, 0);
