//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

function past(h, m, s){
  let a = 0
  a += h*3600
  a += m*60
  a += s
  return a*1000
}


//best practices

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }