let message1: string = 'Hello!'
// message1 = 1 - error
let isDone: boolean = false // true
let decimal: number = 10
let a: bigint = 9007199254740991n

let year: string[] = ['sss', 'dddd', 'ggg']
let year1: Array<string> = ['sss', 'dddd', 'ggg']
let year2: Array<Array<string>> = [['sss'], ['dddd'], ['ggg']]//многомерная структура

let x: [string, number]// определение кортежа
x = ['sss', 10] // инициализация кортежа


//enum - присваиваем какому-то значению осмысленное имя
enum Status { Success = 1, Error = 5, Rejected = 10}
let c2: Status = Status.Error 


function myType(): void{  //ничего не возвращает
  alert('hello')
}

// type assertion - утверждение типов, покозать комилятору с аким типом мы сейчас работаем

let someDate: any = 'ssssss'
let strLength1: number  = (<string>someDate).length
let strLength2: number  = (someDate as string).length

function add2 (x: number, y: number): number{
  return x + y
}

// можно определить типы функции
let myAdd: (x: number, y: number) => number
let myProc: () => void

//optional parameters
// ? - не обязательный параметр
// ! - параметр утверждения
// lastName: string = 'Ivanov' -параметр по умолчанию
function getFullName(firstName: string, lastName?: string): string {return ''}


function printValue(message: string, ...name: string[]): void {}

//arrow function
let incFunction: (x: number, y: number) => number = (x, y)=> x + y

