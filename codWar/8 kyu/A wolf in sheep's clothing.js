function warnTheSheep(queue) {
  const awayGo = "Pls go away and stop eating my sheep";

  const indexOfWolf = queue.lastIndexOf("wolf");

  if (indexOfWolf !== -1 && queue.length - 1 > indexOfWolf) {
    return `Oi! Sheep number ${(queue.length) - (indexOfWolf + 1)}! You are about to be eaten by a wolf!`;
  }
  return awayGo;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
