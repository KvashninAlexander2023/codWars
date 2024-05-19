// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
  const cost = 40;
  const saleMin = 20;
  const saleMax = 50;
  if (d < 3) {
    return d * cost;
  } else if (3 <= d && d < 7) {
    return d * cost - saleMin;
  } else if (d >= 7) {
    return d * cost - saleMax;
  }
}

console.log(rentalCarCost(1)); //, 40);
console.log(rentalCarCost(2)); //, 80);
console.log(rentalCarCost(10)); //, 350);
console.log(rentalCarCost(3)); //, 100);
