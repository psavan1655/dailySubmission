// 11- Read Integer (N) and Print the First Three Powers (N^1, N^2, N^3)

// Using Math.pow() Function
let num = prompt('Enter Number :', 5)
let power = prompt('Power of ', 3)
let powerOf = Math.pow(num, power)
console.log(`${num} Power of ${power} is ${powerOf}`)

// Using For loop and Exponentiation ** Operator
let num = prompt('Enter Number :', 5)
for (var i = 1; i <= 3; i++) {
  let power = num ** i
  console.log(`${num} Power of ${i} is : ${power}`)
}
