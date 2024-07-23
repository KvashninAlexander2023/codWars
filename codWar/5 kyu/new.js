function incrementString(str) {
  // Use a regular expression to find the trailing number
  const match = str.match(/(\d*)$/);
  // If there's no trailing number, append '1'
  if (!match[0]) {
    return str + "1";
  }
  // Extract the number part and the non-number part
  const numberPart = match[0];
  const nonNumberPart = str.slice(0, -numberPart.length);
  // Increment the number part
  const newNumberPart = (parseInt(numberPart, 10) + 1).toString();

  // Pad the new number part with zeros to match the length of the original number part
  const paddedNumberPart = newNumberPart.padStart(numberPart.length, "0");

  // Combine the non-number part with the new number part
  return nonNumberPart + paddedNumberPart;
}

function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}
