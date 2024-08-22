


// function findShort(s){
//   let count = 0
//   const newArr = s.split(" ")
//   count = newArr[0].length
//   newArr.forEach(el => {
//     if(el.length < count){
//       count = el.length
//     }
//   });
//   return count
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//, 3););


function getSmallWord(str) {
  return str.split(" ").reduce((acc, cur) => {
    if (acc > cur.length) {
      return cur.length;
    } else {
      return acc
    }
  }, Infinity);
}

console.log(getSmallWord("bitcoin take over the world maybe who knows perhaps"))//, 3););
