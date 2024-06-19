function foo(s) {
  const a = s.split(" ").reduce((acc, el) => {
    console.log(el);
    acc[el] = (acc.el || 0) + 1;
    return acc
  }, {});
  return a;
}

console.log(foo("fff fff hfh hhh jj"));