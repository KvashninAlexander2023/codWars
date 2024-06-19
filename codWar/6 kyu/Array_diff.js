// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  newArr = []
  a.forEach(el => {
    b.includes(el) ? null : newArr.push(el)})
  return newArr
}

console.log(arrayDiff([1,2,2,2,3],[2]));//[1,3]

//можно так
// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }
// const acc = {}
// console.log(acc["el"]);
