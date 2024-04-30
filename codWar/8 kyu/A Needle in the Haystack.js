function findNeedle(haystack) {
  let position = haystack.indexOf("needle");
  return `found the needle at position ${position}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
