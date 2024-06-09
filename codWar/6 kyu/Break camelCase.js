// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  if (!string) return string;
  let newString = "";
  string.split("").forEach((el) => {
    if (el === el.toLowerCase()) {
      newString += el;
    } else {
      newString = newString + " " + el;
    }
    // console.log(el);
  });

  return newString;
}

console.log(solution("camelCasing"));


//  еще решение 
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }