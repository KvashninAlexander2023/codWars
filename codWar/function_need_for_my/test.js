// function delay(ms, value) {
//   return new Promise((res, rej) => {
//     setTimeout(() => res(value), ms);
//   });
// }

// delay(2000, "hi").then((res)=>{console.log(res);
// });

// const arr = [1, 2, 3];

// for (const val of arr) {
//     // console.log(delay(2000, val))
//     setTimeout(()=>{
//       console.log( delay(2000, val).then((i)=>{console.log(i)
//       }));
      
//     },2000)
  
  
// }

// arr.forEach(async(value)=>{
//   const result = await delay(2000, value)
//   console.log(result)
// })

// console.log('Done');

// console.log(Array.from(new Set([{id:1, name:'Sasha'},{id:2, name:'Sashaaaaa'}])));


// async function b (){
//   return 1
// }

// async function a (){
//   return b()
// }


// const res = await a()
// console.log( res);



// class Car {
//   constructor(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     this.state = {}
//   }
//   startEngine() {
//     console.log(`${this.brand} is started`)
//   }
//   stopEngine = () => {
//     console.log(`${this.brand} is stoped`)
//   }
// }


// const car1 = new Car('bmw', 200)
// const car2 = new Car('bmw', 200)



// const a = {
//   name: 'Alex',
//   car3: car1
// }

// console.log(a.car3 === car1);
// console.log(Car.prototype);



// console.log(car1 === car2)
// console.log(car1.brand === car2.brand)
// console.log(car1.state === car2.state)
 
// console.log(car1.startEngine === car2.startEngine)
// console.log(car1.stopEngine === car2.stopEngine)

// console.log(Object.getPrototypeOf(car1));


// function toTitleCase(sentence) {
    

  // console.log(sentence.toLowerCase().split(' ').map((word)=>{word[0].toUpperCase() + word.slice(1)}));
  
   // sentence.toLowerCase().split(' ').map((word)=>{word[0].toUpperCase() + word.slice(1)})
    
//     return sentence.toLowerCase().split(' ').map((word)=>{
//      return word.slice(0,1).toUpperCase() + word.slice(1)}).join(' ')
// }

// console.log("Example:");
// console.log(toTitleCase("hello world"));

// console.log("axample:"[0].toUpperCase() + "axample:".slice(1));

// function hasThreeDifferentChars(str) {
//         const uniqueChars = new Set(str);
//         return uniqueChars.size >= 3;
//     }

// console.log(hasThreeDifferentChars('aaaaaaaaaaaassssp111ssssl'))

// function exceptZero(items) {
//     const sortItems = [...items].sort((a,b)=> a-b).filter(Boolean)
//     const res = []

//     console.log(sortItems);

//     let count = 0
    
    
//    for(let i=0; i<items.length; i++){
//         if(!items[i]){
//             res.push(0)
//         } else {
//           res.push(sortItems[count]);
//           count++

//         }
//     }
//     return res;
// }

// console.log(exceptZero([0, 2, 3, 1, 0, 4, 5]));

// function fibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
// }     

// // Пример использования:
// console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



// function calculate(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0)  
// }

// console.log(calculate([1, 2, 3, 4, 5]));




/**
 * Функция возвращает самое длинное слово в строке без знаков препинания.
 * Если есть несколько слов одинаковой длины — возвращает первое из них.
 * @param str - строка без знаков препинания
 * @returns самое длинное слово
 */
function getLongestWord(str) {
    // Разбиваем строку на слова по пробелу
    const words = str.split(' ');
    // Ищем самое длинное слово
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Пример использования:
console.log(getLongestWord('это пример строки без знаков препинания'));
console.log(getLongestWord('один два три четыре пять'));
console.log(getLongestWord('кот дом машина самолет'));
