const bubbleSort = array => {
      for (let j = 0; j< array.length; j++) {
        for (let i = 0; i< array.length-1-j; i++) {
          if(array[i] > array[i+1]){
            const currentValue = array[i]
            array[i] =  array[i+1]
            array[i+1] = currentValue
          }
        }
        
      }
      return array
    }
    
// const arr = [6,5,1,3,2]
// bubbleSort(arr)
// console.log(arr); 

///////////////////////////////////////////////////

console.log(bubbleSort([2])) // [2]
console.log(bubbleSort([10, 1, 0 , -42, -5, 4, -10])) // [-42, -10, -5, 0, 1, 4, 10]