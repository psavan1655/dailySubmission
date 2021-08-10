// The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

let t1 = 0;
let t2 = 1;
let nextValue = t1 + t2;
let n = 10;
let sum = "";

console.log("Fibonacci Series: " + t1 + ", " + t2);
let i = 3;
while (i <= n) {
  sum = sum + "" + nextValue + ", ";
  t1 = t2;
  t2 = nextValue;
  nextValue = t1 + t2;
  i++;
}
console.log(sum);
