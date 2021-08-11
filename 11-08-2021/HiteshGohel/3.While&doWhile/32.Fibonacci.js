// 32- Display Fibonacci Series

let temp = 1
let n1 = 0
let n2 = 1
let sum = n1 + n2

const Fibonacci = (num) => {
  console.log(n1)
  console.log(n2)
  while (temp < num) {
    sum = n1 + n2
    n1 = n2
    n2 = sum
    temp++
    console.log(sum)
  }
}

Fibonacci(8)
