// Count Number of Digits of an Integer
let no = 123456789;
let str = String(no);
console.log("Number of Digits of an Integer : " + str.length);

let i = 0;
let count = 0;
while (i < str.length) {
  count = i + 1;
  i++;
}
console.log("Integer : " + count);
