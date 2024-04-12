// Description

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Solution

function isIsogram(str) {
  let stringInArray = str.toLowerCase().split("");
  let arrayInSet = new Set(stringInArray);

  return stringInArray.length === arrayInSet.size;
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); // false, "same chars may not be same case" );


// best practices
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }