//discription
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//solution

function countSheeps(sheep) {
  let a = 0;
  sheep.forEach((el) => {
    if (el) {
      a += 1;
    }
  });
  return a
}

console.log(countSheeps([])); //, 0],
console.log(countSheeps([undefined])); //, 0],
console.log(countSheeps([null])); //, 0],
console.log(countSheeps([false])); //, 0],
console.log(countSheeps([true])); //, 1],
console.log(countSheeps([undefined, null, false, true])); //, 1],
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); //, 2],
