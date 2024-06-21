// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {

  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let newStr = ""
  text.toLowerCase().split("").forEach(el => {
    let i = alphabet.indexOf(el)
    if(i !== -1){
      newStr = newStr + (i+1) + " "
    }
  });

  return newStr.trimEnd();

}


//arr.indexOf(searchElement[, fromIndex = 0])

console.log(alphabetPosition("The sunset sets at twelve o' clock."))//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

// можно через charCode

// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }