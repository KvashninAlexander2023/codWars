

// "john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler('john McClane'));