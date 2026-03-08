/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let one = 0;
  let two = 0;

  while (two < nums.length) {
    // console.log(two);
    if (nums[one] === 0 && nums[two] === 0) {
      two++;
    } else if (nums[one] !== 0 && nums[two] === 0) {
      one++;
      two++;
    } else if (nums[one] === 0 && nums[two] !== 0) {
      [nums[one], nums[two]] = [nums[two], nums[one]];
      one++;
      two++;
    }
  }

  return nums;
};
// console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0, 1, 1]));

//best
// var moveZeroes = function(nums) {
//   let left = 0 , len = nums.length -1;
//   for(let i = 0;i<=len;i++){
//       if(nums[i] != 0){
//           nums[left] = nums[i]
//           left ++
//       }
//   }

//   for(let j =left;j<=len;j++){
//       nums[j] = 0
//   }
//   return nums
// };

// best  2
// var moveZeroes = function(nums) {
//   let left = 0 , len = nums.length -1;
//  for(let i = 0;i<=len;i++){
//      if(nums[i] != 0){
//          nums[left] = nums[i]
//          left ++
//      }
//  }

//  for(let j =left;j<=len;j++){
//      nums[j] = 0
//  }
// };
