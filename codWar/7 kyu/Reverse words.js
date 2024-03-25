//Description
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Solution

function reverseWords(str) {
  if (str === "") {
    return "";
  }

  let wordArray = str.split(" ");

  let newArray = wordArray.map((e) => {
    return e.split("").reverse().join("");
  });
  return newArray.join(" ");
}

//Solution 2

// function reverseWords(str) {
// Go for it
//split words into seperate arrays
//   debugger;
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

console.log(reverseWords("This is an example!"));
