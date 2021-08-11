// 29- Reverse A given Number
let num = 123
let rem = 0
let reverseNum = 0

while (num > 0) {
  rem = num % 10
  reverseNum = reverseNum * 10 + rem
  num = Math.floor(num / 10)
}
console.log('Reversed Number :', reverseNum)
