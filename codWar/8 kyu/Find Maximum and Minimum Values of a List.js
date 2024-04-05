//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

const max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

console.log(min([42, 54, 65, 87, 0])); // 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566);



// best practices

//const min = (list) => Math.min(...list);
//const max = (list) => Math.max(...list);