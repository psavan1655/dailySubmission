// Check Whether a Number is A Palindrome or No
let no = 1211;

let str = String(no);
let restr = "";

let i = str.length;
while (i >= 0) {
  restr = restr + str.charAt(i);
  i--;
}

if (restr == str) {
  console.log("Number is A Palindrome");
} else {
  console.log("Number is not A Palindrome");
}
