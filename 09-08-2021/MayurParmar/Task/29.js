// - Reverse A given Number
let a = 1211;
let b = String(a);
let c = "";

let i = b.length - 1;
while (i >= -1) {
  c = c + b.charAt(i);
  i--;
}
console.log(Number(c));
