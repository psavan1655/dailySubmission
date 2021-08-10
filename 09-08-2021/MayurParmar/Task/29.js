// - Reverse A given Number
let a = 1211;
let b = String(a);
let c = "";
for (let i = b.length - 1; i > -1; i--) {
  c = c + b.charAt(i);
}
console.log(Number(c));
