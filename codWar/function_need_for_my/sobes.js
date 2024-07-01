// const q = {
//   age: 28,
//   print:()=>{
//     console.log(this.age);
//     // return 10
//   }
// }

////this.age = q.age
// console.log(this);
// const w = q.print

// w.call(q)
// w.call({age:10})
// console.log(w.call(q));
////q.print()

////////////////// 2 //////////////

// function Foo (){
//   this.age = 28
//   this.print = ()=> {
//     console.log(this.age);
//     return ()=>{return "a"}
//   }
// }
// const q = new Foo

// // console.log(q);
// // q.print() // 28

// const t = q.print
// t().call()
// console.log(t().call()
// );

////////////////// 3 //////////////

// class Foo {
//   constructor() {
//     this.age = 28;
//   }
//   print = () => {
//     console.log(this.age);
//   }
// }
// const q = new Foo();
// q.print(); // 28


const sum =(a,b)=>{
  return a + b
}
// const newSum = sum.bind(null,10)
function newSum(b){
  return sum(b,10)
}

console.log(newSum(5)); //15