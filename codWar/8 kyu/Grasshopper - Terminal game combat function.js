function combat(health, damage) {
  if(health - damage < 0) return 0
  return health - damage 
}


console.log(combat(20, 30));//0
console.log(combat(40, 30));//10