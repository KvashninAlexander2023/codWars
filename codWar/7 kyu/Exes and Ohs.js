// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let o = 0;
  let x = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((el) => {
      if (el === "o") {
        o++;
      }
      if (el === "x") {
        x++;
      }
    });
  return o === x;
}

console.log(XO("xo")); //,true);
console.log(XO("xxOo")); //,true);
console.log(XO("xxxm")); //,false);
console.log(XO("Oo")); //,false);
console.log(XO("ooom")); //,false);
