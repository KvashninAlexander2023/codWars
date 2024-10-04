// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.




const capitals = function (word) {
	const newArr = []
  const newWord = word.toLowerCase()
  for (let i = 0; i < newWord.length; i++) {
    if(newWord[i] !== word[i]){
      newArr.push(i)
    }
  }
  return newArr
};

console.log((capitals('CodEWaRs'))) //, [0,3,4,6] ));


// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }