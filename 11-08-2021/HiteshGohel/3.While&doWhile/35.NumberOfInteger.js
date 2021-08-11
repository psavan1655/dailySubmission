// 35- Count Number of Digits of an Integer

const num = 121
const tempStr = String(num)
let digits = 0
let counter = 0
while (digits < tempStr.length) {
  console.log('counter is :', counter)
  counter = digits + 1
  digits++
}

console.log(`Total Digits in ${num} is ${digits}`)
