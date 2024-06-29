//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// function isValidWalk(walk) {
//   if(walk.length === 10) {
//     const obj = walk.reduce((acc, el)=>{
//       acc[el] = (acc[el] || 0) + 1;
//       return acc
//     }, {})
//     // let keysObj = Object.keys(obj)
//     while( Object.keys(obj).length == 4) {
//       // console.log("туту");
//       for(let i = 0; i < keysObj.length; i ++){
//         // console.log(keysObj[i]);
//         if(obj[keysObj[i]] == 1){
//           delete obj[keysObj[i]]
//         } else {
//           obj[keysObj[i]] -= 1
//         }
//       }
//     }
//     keysObj = Object.keys(obj)
//     if (keysObj.length == 2){
//       const arr = Object.values(obj)
//       return arr[0] == arr[1]
//     }
    
//     return obj
//   }
//   return false
// }

// function isValidWalk(walk) {
//   if(walk.length === 10) {
//     const obj = walk.reduce((acc, el)=>{
//       acc[el] = (acc[el] || 0) + 1;
//       return acc
//     }, {})
//     while( Object.keys(obj).length == 4) {
//       let keysObj = Object.keys(obj)
//       for(let i = 0; i < keysObj.length; i ++){
//         if(obj[keysObj[i]] == 1){
//           delete obj[keysObj[i]]
//         } else {
//           obj[keysObj[i]] -= 1
//         }
//       }
//     }
//     keysObj = Object.keys(obj)
//     if (keysObj.length == 2){
//       const arr = Object.values(obj)
//       return Object.keys(obj)
// //       return arr[0] === arr[1]
//     }
//     return false
//   }
//   return false
// }

function isValidWalk(walk) {
  if(walk.length === 10) {
    const obj = walk.reduce((acc, el)=>{
      acc[el] = (acc[el] || 0) + 1;
      return acc
    }, {})
    while( Object.keys(obj).length == 4) {
      let keysObj = Object.keys(obj)
      for(let i = 0; i < keysObj.length; i ++){
        // console.log(keysObj[i]);
        if(obj[keysObj[i]] == 1){
          delete obj[keysObj[i]]
        } else {
          obj[keysObj[i]] -= 1
        }
      }
    }
    keysObj = Object.keys(obj)
    if (keysObj.length == 2 ){
      if (keysObj.includes("w") && keysObj.includes("e")){
        const arr = Object.values(obj)
        return arr[0] === arr[1]
      }
      if (keysObj.includes("n") && keysObj.includes("s")){
        const arr = Object.values(obj)
        return arr[0] === arr[1]
      }
      return false
    }
    return false
  }
  return false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))//, 'should return true'););

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))//, 'should return false'));

console.log(isValidWalk(['n','w','s','e','n','s','n','s','n','s']))//, 'should return false'););


function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}