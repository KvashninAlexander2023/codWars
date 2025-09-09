/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true;
  const m = flowerbed.length;

  for (let i = 0; i < m; i++) {
      if (flowerbed[i] === 0 &&
          (i === 0 || flowerbed[i - 1] === 0) &&
          (i === m - 1 || flowerbed[i + 1] === 0)) {
              
          flowerbed[i] = 1; // we place a flower
          n--;

          if (n === 0) return true;
          i++; // we skip the next spot since we just planted
      }
  }

  return false;
};
canPlaceFlowers([1,0,0,0,1], 1) // true
canPlaceFlowers([1,0,0,0,1], 2) // false
canPlaceFlowers([1,0,0,0,0,1], 2) // false
canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3) // true