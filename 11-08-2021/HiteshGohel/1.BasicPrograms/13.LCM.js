// 13- LCM of Two Numbers

let num1 = 12
let num2 = 18

let min = num1 > num2 ? num1 : num2
while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(`LCM of ${num1} and ${num2} : ${min}`)
    break
  }
  min++
}
