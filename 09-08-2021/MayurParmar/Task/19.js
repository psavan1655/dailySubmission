// 19- The Number Is Even or Odd

let no = 11;
let flag = false;
for (let i = 2; i < no; i++) {
  if (no % i == 0) {
    flag = true;
    break;
  }
}

if (flag) {
  console.log("This number is Even");
} else {
  console.log("This number is odd");
}
