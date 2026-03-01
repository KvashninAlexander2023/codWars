//description
// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.


/**
 * @param {string} s
 * @return {string}
 */

//solution

var reverseWords = function(s) {
  console.log(s.split(" "));
    return s.split(" ").filter((a) => a).reverse().join(" ").trim();
    //return s.trim().split(/\s+/).reverse().join(" "); 0ms 100%

};

console.log(reverseWords("a good   example"));

/// best

// var reverseWords = function(s) {
  // Trim leading/trailing spaces
  // s = s.trim();
  // Split by spaces, filter out empty strings (in case of multiple spaces)
  // let words = s.split(/\s+/);
  // Reverse the array of words
  // words.reverse();
  // Join back with a single space
  // return words.join(" ");
// };

// интересный способ замены 
// var reverseWords = function (s) {
//   if (!s.length) return "";
//   let str = s.trim().split(/\s+/);
//   let start = 0;
//   let end = str.length - 1;
//   while (start < end) {
//       [str[start], str[end]] = [str[end], str[start]];
//       start++;
//       end--;
//   }
//   return str.join(" ");
// };