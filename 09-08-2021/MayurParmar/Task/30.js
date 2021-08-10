// Find Number Is Armstrong Or Not
let no = 153;
let str = String(no);
let total = 0;

let i = 0;

while (i < str.length) {
  let a = str.charAt(i);
  total = total + a ** 3;
  i++;
}

if (total == no) {
  console.log("Number Is Armstrong...");
} else {
  console.log("Number Is NOT Armstrong...");
}
