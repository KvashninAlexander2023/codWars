function updateLight(current) {
  let a = "";
  switch (current) {
    case "green":
      a = "yellow";
      break;
    case "yellow":
      a = "red";
      break;
    case "red":
      a = "green";
      break;
  }
  return a;
}
