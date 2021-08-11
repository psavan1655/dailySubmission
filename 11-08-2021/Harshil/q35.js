let number = 1000;
let count = 0;
while (number != 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log("Total number of digit is ", count);
