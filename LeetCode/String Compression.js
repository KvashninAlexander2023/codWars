/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let str = ''
    let value = ''
    let count = 0
    for (const el of chars) {  
      if(el === value){
        count++
      } else if(el !== value){
        str = str + (count > 1 ? value + count : value)
        value = el
        count = 1
      } else {
        value = el
        count = 1
      }
    }
    str = str + (count > 1 ? value + count : value)

    const newChars = str.split('')

    for (const i in newChars) {
         chars[i] = newChars[i]
    }
    return newChars.length

  }
const chars1 = ["a","a","b","b","c","c","c"]
console.log(compress(chars1))
