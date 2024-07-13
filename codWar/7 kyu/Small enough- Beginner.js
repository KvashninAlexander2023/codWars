function smallEnough(a, limit) {
  const newArr = a.filter(i => i>limit)
  return !newArr.length
}

console.log(smallEnough([66, 101, 200], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false

