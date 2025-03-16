// Принимает urls и лимит сколько можно параллельно делать запросов.
// Когда все запросы ответили вызываем callback и передаём массив результатов
// (ВАЖНО! Порядок результатов такой же как порядок links)
// Дополнительно: Если уже отправляли запрос на этот url, новый не отправляем
// берём результат прошлого запроса

//(В консоли должно быть)
// fetching: link1
// fetching: link2
// fetching: link3
// fetching: link7
// Test passed

function parallelLimit(links, limit, callback) {
  let count = 0
  let index = 0
  const resultArr = []

  const refetch = () => {
    let currentIndex = index
    if(links.length === count){
      callback(resultArr)
      return
    }
    if(links[currentIndex]){
    fetch(links[currentIndex]).then((res)=>{
      count++
      resultArr[currentIndex] = res
      refetch()
      index++

    })}
  }

  for(let i = limit; i > 0; i--){
    refetch()
    index++
  }

  return null
}

const db = { link1: '1', link2: '2', link3: '3', link7: '7' }
const links = ['link1', 'link2', 'link1', 'link3', 'link1', 'link2', 'link2', 'link7']
const expected = [1, 2, 1, 3, 1, 2, 2, 7]

// declare function fetch(url: string): Promise<string>;
function fetch(url) {
  console.log(`fetching: ${url}`)
  const response = db[url]

  if (response === undefined) {
    throw new Error('No such url')
  }

  return new Promise((resolve) => {
    const timeout = Math.random() * 100 + 20//было 20
    setTimeout(() => resolve(response), timeout)
  })
}

function callOnce(fn) {
  this.called = false

  return (...args) => {
    if (this.called) {
      throw new Error('Callback called second time')
    }

    this.called = true

    return fn(...args)
  }
}

function test(results) {
  if (!Array.isArray(results) || results.toString() !== expected.toString()) {
    console.error(`Expected: ${expected.toString()}`)
    console.error(`Received: ${results.toString()}`)
    return
  }

  console.log('Test passed')
}

console.clear()

parallelLimit(links, 3, callOnce(test))
