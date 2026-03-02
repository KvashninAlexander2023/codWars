//description 
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.


//solution
/**
 * @param {number[]} num
 * @return {number[]}
 */
// var productExceptSelf = function(num) {

//   const answer = []
//   const val = num.length
//   let a = 0
//   while(a < val){
//     // console.log('a', a);
//     let b = 0
    
//     let pref = 1
//     let post = 1

//     while(b < a){
//       // console.log('b',b);
//       pref *= num[b]
//       b++
//     }

//     let c = a+1
//     while(c < val){
//       // console.log('c',c);
//       post *= num[c]
//       c++
//     }

//     answer.push(pref*post)
//     a++
//   }
//   // console.log(answer);
//   return answer
// };
// не прошло по времени

var productExceptSelf = function(num) {

const n = num.length

const answer = new Array(n)

let pref = 1
for (let i = 0; i < n; i++) {
  answer[i] = pref
  pref *= num[i]
}

let post = 1
for (let i = n-1; i >= 0; i--) {
  answer[i] = answer[i] * post
  post = post * num[i]
}

  return answer  
};

//answer  [1, 3, 15, 120]
//num     [3, 5, 8, 4]
//post    160 32 4  1
//       [ 160, 96, 60, 120 ]
console.log(productExceptSelf([3, 5, 8, 4]))
