// - Find a total number of alphabets, digits or special character in a string

let str = "mayur 12 @ @";

let special = 0;
let alphabets = 0;
let number = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == "@") {
    special = special + 1;
  } else if (
    str.charAt(i) == "1" ||
    str.charAt(i) == "2" ||
    str.charAt(i) == "3" ||
    str.charAt(i) == "4" ||
    str.charAt(i) == "5" ||
    str.charAt(i) == "6" ||
    str.charAt(i) == "7" ||
    str.charAt(i) == "8" ||
    str.charAt(i) == "9"
  ) {
    number = number + 1;
  } else if (str.charAt(i) == " ") {
  } else {
    alphabets = alphabets + 1;
  }
}

console.log(
  "total number of alphabets: " +
    alphabets +
    ", digits: " +
    number +
    " or special:" +
    special +
    " character in a string"
);
