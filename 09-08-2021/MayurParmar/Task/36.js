// Find A Generic Root Of Number
let no = 15937;

let sum = 0;

let str = String(no);
let i = 0;
while (i < str.length) {
  sum = Number(sum) + Number(str.charAt(i));
  i++;
}

let str2 = String(sum);
let j = 0;
let sum2 = 0;
while (j < str2.length) {
  sum2 = Number(sum2) + Number(str2.charAt(j));
  j++;
}
console.log("Generic root of number " + no + " " + sum2);
