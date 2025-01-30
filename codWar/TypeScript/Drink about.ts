// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

export function peopleWithAgeDrink(old: number): string {
  switch (true) {
    case (old < 14):
      return 'drink toddy'
    case (old < 18):
      return 'drink coke';
    case (old < 21):
      return 'drink beer';
  default:
    return 'drink whisky';
}}

console.log(peopleWithAgeDrink(13))//, 'drink toddy');
console.log(peopleWithAgeDrink(17))//, 'drink coke');
console.log(peopleWithAgeDrink(18))//, 'drink beer');
console.log(peopleWithAgeDrink(20))//, 'drink beer');
console.log(peopleWithAgeDrink(30))//, 'drink whisky');

// switch (true) {
//   case (old < 14):
//     return 'drink toddy';
//   case (old < 18):
//     return 'drink coke';
//   case (old < 21):
//     return 'drink beer';
//   default:
//     return 'drink whisky';
// }