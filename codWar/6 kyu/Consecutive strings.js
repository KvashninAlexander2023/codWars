//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
  if (!strarr || k <= 0 || k > strarr.length) return "";
  const objOfString = {
    len: 0,
    index: 0,
    str: "",
  };
  strarr.forEach((el, i) => {
    // console.log([...strarr].splice(i, i + k).join(""));
    let lenString = [...strarr].splice(i, k).join("").length;
    if (lenString > objOfString.len) {
      objOfString.len = lenString;
      objOfString.index = i;
      objOfString.str = [...strarr].splice(i, k).join("");
    }
  });
  // return strarr.splice(objOfString.index, k + 1).join("");
  return objOfString.str;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //, "abigailtheta")
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); //, "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)); //, "")
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  )
); //, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); //, "wlwsasphmxxowiaxujylentrklctozmymu")

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); //, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //, "ixoyx3452zzzzzzzzzzzz")
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); //, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //, "")
