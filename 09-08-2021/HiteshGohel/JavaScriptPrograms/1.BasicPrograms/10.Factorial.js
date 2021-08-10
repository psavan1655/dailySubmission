let fact = 1
let num = prompt('Enter Number : ', 5)
for (var i = Number(num); i > 0; i--) {
  fact = fact * i
}
console.log(`Factorial of ${num} is : ${fact}`)
