// - Calculate Sum of Natural Number
let no = 20;
let sum = 0;

let i = 0;
while (i <= no) {
  sum = sum + i;
  i++;
}

console.log("Calculate Sum of Natural Number : " + sum);

let s = (no * (no + 1)) / 2;
console.log(s);
