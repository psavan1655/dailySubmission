// - Find factorial of any number using recursion
let number = 4;
function factorial(number) {
  let tem = 1;
  for (let i = 1; i <= number; i++) {
    tem = tem * i;
  }
  console.log(tem);
}
factorial(number);
