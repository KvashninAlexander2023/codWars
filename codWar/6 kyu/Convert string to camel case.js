// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution
function toCamelCase(str) {
  return str
    .replaceAll('_', '-')
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(toCamelCase(''));
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));

// другое решение
// function toCamelCase(str){
//   let arr = str.split('');
//   for(i = 0; i < arr.length; i++){
//     let letter = arr[i];
//     if(letter == '_' || letter == '-') {
//       arr[i + 1] = arr[i + 1].toUpperCase();
//       arr[i] = '';
//     }
//   }
//   return arr.join('');
// }
