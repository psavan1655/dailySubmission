// Check whether a number is divisible by 5 and 11 or not.

let no = 55;

let flag = false;

if (no % 5 == 0 && no % 11 == 0) {
  flag = true;
}

if (flag) {
  console.log("This is divisible by 5 and 11 ");
} else {
  console.log("This is not divisible by 5 and 11 ");
}
