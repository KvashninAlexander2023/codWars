//Description

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Solution
function accum(s) {
  let newArray = [];
  let array = s.toLowerCase().split("");
  for (let i = 0; i < array.length; i++) {
    for (let w = 0; w <= i; w++) {
      if (w === 0) {
        newArray.push(array[i].toUpperCase());
        continue;
      }
      newArray[i] += array[i];
    }
  }
  return newArray.join("-");
}

console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd");
console.log(accum("AbCdf")); //-> "A-Bb-Ccc-Dddd");

//Best practices
