// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// betterThanAverage([2, 3], 5) should return True",

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, val) => acc + val, 0);
  return sum / classPoints.length < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //False
