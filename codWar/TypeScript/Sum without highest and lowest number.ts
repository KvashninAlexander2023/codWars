// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.


export function sumArray(array:number[] | null) : number {
  if (!array) return 0
  return array.sort((a,b)=> a - b).slice(1, -1).reduce((acc, item) => acc + item, 0)
}



console.log(sumArray([ 6, 2, 1, 8, 10 ]))//, 16););
console.log(sumArray([6, 0, 1, 10, 10  ]))//, 17););
