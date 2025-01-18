export function hello(name = ''): string {
  if(!name){
    return 'Hello, World!'
  }
  const formattedName = name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
  return `Hello, ${formattedName}!`;
}

console.log(hello('johN'))//, 'Hello, John!')
console.log(hello('alice'))//, 'Hello, Alice!')
console.log(hello())//, 'Hello, World!')