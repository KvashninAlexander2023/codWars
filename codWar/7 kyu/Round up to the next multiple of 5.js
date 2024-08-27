// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n) {
  if (n % 5 === 0) {
    return  n
  } else {
    return roundToNext5(n + 1);
  }
}

console.log(roundToNext5(6));

//[[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]]


//можно так
// function roundToNext5(n){
//   while(n % 5 !== 0) n++;
//   return n;
// }