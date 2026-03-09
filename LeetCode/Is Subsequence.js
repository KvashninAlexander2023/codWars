/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 **/

// Пример 1:

// Входные данные: s = "abc", t = "ahbgdc"
//  Выходные данные: true
// Пример 2:

// Входные данные: s = "axc", t = "ahbgdc"
//  Выходные данные: false

const isSubsequence = function (s, t) {
  const lenS = s.length;
  const lenT = t.length;

  // console.log(lenS, lenT);

  let left = 0;
  let right = 0;

  if (lenS > lenT) return false;

  while (right < lenT && left < lenS) {
    if (s[left] === t[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }
  if (left === lenS) return true;
  return false;
};

console.log(isSubsequence("abc", "hbgdc"));
// console.log(isSubsequence("abc", "ahbgdc"));


// best 1ms
// var isSubsequence = function(s, t) {
//   let j = 0;

//   for(let i=0; i<t.length; i++) {
//       if(s[j] === t[i]) {
//           j++;
//       }
//   }

//   return j === s.length;
// };