// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Input: s = "IceCreAm"

// Output: "AceCreIm"

/**
 * @param {string} s 
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = s.match(/[aeiou]/gi)
  const vowels2 = [...vowels]
  // console.log(vowels);
  let newStr = ''
  // console.log(s.length);
  
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if(vowels?.includes(s[i])){
      // console.log(s[i],true);
      newStr += vowels2.pop()
      // console.log(newStr);
      
    } else {
      newStr += s[i]
    }
    console.log(vowels)
  }
  // console.log(newStr);
  
   return newStr 
};

console.log(reverseVowels('IceCreAm') === "AceCreIm");

// console.log('test', [222].pop());
// console.log('test', '236'[1]);


// best
// var reverseVowels = function(s) {
//   let arr=s.split("");
//   let vowels="aeiouAEIOU";
//   let left=0;
//   let right=arr.length-1;
//   while(left<right)
//   {
//       if(vowels.includes(arr[left])  && vowels.includes(arr[right]))
//       {
//           temp=arr[left];
//           arr[left]=arr[right];
//           arr[right]=temp;
//           left++;
//           right--;
//       }
//       else if(!vowels.includes(arr[left]))
//       {
//         left++;
//       }
//       else
//       {
//           right--;
//       }
//   }
//   return arr.join("");
// };