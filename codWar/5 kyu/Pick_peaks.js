function pickPeaks(arr) {
  const newObj = { pos: [], peaks: [] };
  if (new Set(arr).size <= 1) {
    return newObj;
  } else {
    let value = 0;
    let valMax = 0;

    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > value) {
        value = arr[i];
        valMax = arr[i];
      } else if (
        arr[i] === value &&
        arr[i - 2] !== value &&
        new Set(arr.slice(i)).size >= 2
      ) {
        // console.log(new Set(arr.slice(arr[i])));
        // console.log(new Set(arr.slice(arr[i - 1])).size >= 2);
        // console.log(arr.slice(arr[i]));
        // console.log(arr[i]);
        // console.log(i);
        newObj.pos.push(i - 1);
        newObj.peaks.push(arr[i]);
      } else if (valMax > arr[i]) {
        newObj.pos.push(i - 1);
        newObj.peaks.push(arr[i - 1]);
        valMax = 0;
        value = arr[i];
      } else {
        value = arr[i];
      }
    }
  }
  return newObj;
}

// console.log(pickPeaks([1, 2, 2, 2, 2])); //, {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3, 1, 2, 3, 6, 4, 1, 2, 3, 2, 1])); //, {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])); //, {pos:[3,7], peaks:[6,3]});
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])); //, {pos:[3,7,10], peaks:[6,3,2]});
// console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])); //, {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])); //, {pos:[2], peaks:[3]});
// console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])); //, {pos:[2], peaks:[3]});
// console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])); //, {pos:[2], peaks:[3]});
// console.log(
//   pickPeaks([
// 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
//   ])
// ); //, {pos:[2,7,14,20], peaks:[5,6,5,5]});
// console.log(pickPeaks([])); //,{pos:[],peaks:[]});
// console.log(pickPeaks([1, 1, 1, 1])); //,{pos:[],peaks:[]});
