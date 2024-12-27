// function parseF(s:string): number|null {
//   if( Number(s) !== 'NaN'){return Number(s)}
//   return null;
// }

function parseF(s: string): number | null {
  const parsed = Number(s)
  if (!isNaN(parsed)) { 
    return parsed
  }
  return null
}

console.log(parseF("true"));// null
console.log(parseF("1"));// 1
console.log(parseF("1.0"));// 1.0


// console.log(  Number('true') !== 'NaN' )