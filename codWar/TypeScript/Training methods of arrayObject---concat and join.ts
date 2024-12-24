export function bigToSmall(arr: number[][]): string { 
  const result = [].concat(...arr as []).sort((a,b)=>b-a)
  return result.join('>')
}



console.log(bigToSmall([[1,2],[3,4],[5,6]]))//, "6>5>4>3>2>1");)