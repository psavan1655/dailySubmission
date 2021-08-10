// - A String is Palindrome or Not

let str = "mayur Parmar maysur";

let arr = str.split(" ");
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
if (String(arr) == String(newArr)) {
  console.log("String is Palindrome");
} else {
  console.log("String is not Palindrome");
}
