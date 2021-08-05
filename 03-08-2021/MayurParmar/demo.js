// array in javascript
var a = new Array(); // optional line
a = ["mayur", "parmar", "kishorbhai", "shubham"];

// indexOf method is find index number)
const indexofa = a.indexOf("masyur");

// console.log(indexofa);

if (indexofa != -1) {
  a.splice(indexofa, 1, "Mayur");
} else {
  console.log("No value ...");
}

//  splice method is use to add update delete to use in array

// a.splice(0, 1);

// a.splice(0, 1, "Mayur");

// a.push("raj", "mk", "dsdsd", "dsdsd", "dsdsadsa", "dsdsadsad");
// console.log(a);

// traversal of array
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// for (let elements in a) {
//   console.log(elements);
//   //   for in loop it's gives index number o f array
// }

for (let elements of a) {
  console.log(elements);
  //   for of loop it's gives value of array
}
