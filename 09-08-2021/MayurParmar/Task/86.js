//  Generate nth Fibonacci term using recursion.

let number = 10;
let a = 0;
let b = 1;
let c = 0;
console.log(a + ", " + b);
for (let i = 2; i < number; i++) {
  console.log(", " + (a + b));
  c = a;
  a = b;
  b = c + b;
}
