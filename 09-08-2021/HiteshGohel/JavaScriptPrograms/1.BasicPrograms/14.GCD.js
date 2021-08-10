// 14- GCD of Two Numbers

let GCD = (num1, num2) => {
  while (num1 !== num2) {
    num1 > num2 ? (num1 = num1 - num2) : (num2 = num2 - num1)
  }
  console.log(`The GCD is ${num2}`)
}
GCD(226, 62)
