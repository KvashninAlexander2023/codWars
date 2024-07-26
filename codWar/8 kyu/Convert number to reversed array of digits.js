

function digitize(n) {
  const newArr = n.toString().split("").reverse()
  return newArr.map(el => +el)
}

console.log((digitize(35231)))//,[1,3,2,5,3]));