




function order(words){
  if(!words) return ''
  const newArr = words.split(" ")
  const newObj = newArr.reduce((acc, el)=>{
    let digits = el.match(/\d/g);
    acc[digits[0]] = el
    return acc
  }, {})
  const newArr2 = []
  for (const key in newObj) {
    newArr2.push(newObj[key])
  }
  return newArr2.join(" ")
}



console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""))//, "")


// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }   