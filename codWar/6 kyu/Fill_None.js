// no solution

function fill(arr, method = 0) {
  if(arr.length === 0){return arr}
  if(arr.length === 1){return arr}

  let newArr = []

  if(method == 1){
    newArr = leftArray(arr)
  }
  if(method == -1){
    newArr = rightArray(arr)
  }
  if(method == 0){
    // Метод 0: Массив делится пополам, каждая половина заполняется соответствующими числами
    let leftClosest = null
    let rightClosest = null
    const partArr = arr.length % 2 == 0 ? arr.length/2 : (arr.length-1)/2
  
    

    if(arr.length % 2 != 0){
      const filterArr = arr.filter((el)=>el != undefined)

      leftClosest = new Array(partArr).fill(filterArr[0])
      rightClosest = new Array(partArr).fill(filterArr[1])

      newArr = leftClosest.concat(rightClosest)
      let minArr = Math.min(...newArr.filter((el)=>el != undefined))
      newArr.splice(partArr, 0, minArr)
    }
  }
  return newArr;
}

// console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1))//([1, 1, 2, 2, 2, 2, undefined]);
// console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 0))//([1, 1, 1, 1, 2, 2, 2]);
console.log(fill([1, undefined], -1))//([1, 1, 1, 1, 2, 2, 2]);
// console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1))//([undefined, 1, 1, 1, 1, 2, 2])


function leftArray (arr) {
  const newArr = []
  let currentValue = undefined
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
      newArr.push(arr[i])
      currentValue = arr[i]
    } else {newArr.push(currentValue)}
  }
  return newArr
}
function rightArray (arr) {
  const newArr = []
  let currentValue = undefined
  for(let i=arr.length-1; i>=0; i--){
    if(typeof arr[i] === 'number'){
      newArr.unshift(arr[i])
      currentValue = arr[i]
    } else {newArr.unshift(currentValue)}
  }
  return newArr
}


// одно из решений

// function fill(arr, method = 0) {
//   const result = new Array(arr.length);
//   const definedIndices = arr.reduce((acc, val, idx) => val !== undefined ? [...acc, idx] : acc, []);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== undefined) {
//       result[i] = arr[i];
//       continue;
//     }

//     const leftIndex = definedIndices.findLast(idx => idx < i);
//     const rightIndex = definedIndices.find(idx => idx > i);

//     const leftValue = leftIndex !== undefined ? arr[leftIndex] : undefined;
//     const rightValue = rightIndex !== undefined ? arr[rightIndex] : undefined;
//     const leftDistance = leftIndex !== undefined ? i - leftIndex : Infinity;
//     const rightDistance = rightIndex !== undefined ? rightIndex - i : Infinity;

//     if (method === -1 && rightValue !== undefined) {
//       result[i] = rightValue;
//     } else if (method === 1 && leftValue !== undefined) {
//       result[i] = leftValue;
//     } else if (method === 0 && (leftValue !== undefined || rightValue !== undefined)) {
//       if (leftDistance < rightDistance) {
//         result[i] = leftValue;
//       } else if (rightDistance < leftDistance) {
//         result[i] = rightValue;
//       } else {
//         result[i] = Math.min(leftValue, rightValue);
//       }
//     } else {
//       result[i] = undefined;
//     }
//   }

//   return result;
// }