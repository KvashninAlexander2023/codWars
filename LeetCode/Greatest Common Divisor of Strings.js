// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
// Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters

const fun = (str1, str2) => {
  if(str1 + str2 !== str2 + str1) return ''

  const len1 = str1.length
  const len2 = str2.length

  const lenMax = Math.max(len1, len2)
  const lenMin = Math.min(len1, len2)

  if(lenMax-lenMin === lenMin) return len1<len2 ? str1 : str2

  const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b)

 return str1.substring(0, gcd(len1, len2))

}

console.log(fun('AB', 'ABABAB') );

















// var gcdOfStrings = function(str1, str2) {
//   let prefix = str1;

//   for (let i = 1; i < str1.length; i++) {
//     while (!str2.startsWith(prefix)) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === "") return "";
//     }
//   }

//   return prefix;
// };