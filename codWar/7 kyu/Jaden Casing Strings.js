const str = "How can mirrors be real if our eyes aren't real";

function toJadenCase(str) {
  return str
    .split(" ")
    .map((word) => word.split("")[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(toJadenCase(str)); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
