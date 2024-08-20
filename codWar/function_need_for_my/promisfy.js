const promisificay = (fun, ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const a = fun();
      //console.log(a);
      res(a);
    }, ms);
  });
};

function log() {
  console.log(1);
  return 3;
}

promisificay(log, 3000).then((res) => console.log(res));
