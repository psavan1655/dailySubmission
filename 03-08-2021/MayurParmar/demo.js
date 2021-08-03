// array in javascript
var a = new Array(); // optional line
a = ["mayur", "parmar", "kishorbhai", "shubham"];
// console.log(a);

// traversal of array
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

for (let elements in a) {
  console.log(elements);
  //   for in loop it's gives index number o f array
}

for (let elements of a) {
  console.log(elements);
  //   for of loop it's gives value of array
}
