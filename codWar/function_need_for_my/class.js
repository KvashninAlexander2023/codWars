
/// _name - приватное поле, ставят разработчики
// #name - приватное поле - не имеем доступа снаружи


class User {
  #name = ""
  constructor(name, site, dob){
    this.#name=name // #name - приватное поле - не имеем доступа снаружи
    this.site=site
    this.dob=dob
    this.counter = 0
  }

  // getName(){
  //   return this.#name + 111 // имеем доступ внутри, и через гет отдаем наружу
  // }
  get name(){ // - работает при вызове имени
    console.log("get");
    return this.#name + 111 // имеем доступ внутри, и через гет отдаем наружу
  }
  set name(value){
    if(value === "Igor") throw new Error("Нельзя так называть")
      this.#name = value
  }

  hello(){
    this.counter++
    console.log(`I am ${this.#name} from ${this.site}`)
  }
}

const u1 = new User("Alexander", "it-incubator", new Date(1988,1,2))
const u2 = new User("Artem", "it-incubator", new Date(1980,10,12))

// u1.hello()
// u1.hello()
// u2.hello()
// u2.hello()

// console.log(u1.counter);
// console.log(u2.counter);

// console.log(u2.getName());
console.log(u2.name);
// console.log(u2.name = "gor");
// console.log(u2.setName("Vasia"));
// console.log(u2.getName());

///////////////// наследование ///////////////////

class Coder extends User {
  constructor (name, site, dob, tech){
    super(name, site, dob)
    this.tech = tech
  }
  code(){
    console.log(`I am ${this.name} coder`);
  }
  hello(){
    super.hello()
    console.log("Go away");
  }
}

const coder1 = new Coder("Sashka", "it-incubator", new Date(1988,1,2))

coder1.code()

console.log("typeof: ", typeof String);