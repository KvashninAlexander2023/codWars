function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("abracadabra")); //, 5));
