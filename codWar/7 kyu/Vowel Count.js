// We will consider a, e, i, o, u as vowels for this Kata (but not y).

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"]
 
  return  str.split("").reduce((acc, el)=>{
    if(vowels.includes(el) ) return acc+1
    return acc
  },0)
    
}


console.log(getCount("abracadabra"))//, 5));


// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }