function rot13(s) {
  return s.replace(/[A-Za-z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13));
  });
}
