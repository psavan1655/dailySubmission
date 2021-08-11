// - Sum of all natural numbers between 1 to n using recursion.
let number = 5;

function sumOfNaturalNumber(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(
  "Sum of natural number.\n" +
    number +
    " sum of natural number is " +
    sumOfNaturalNumber(number)
);
