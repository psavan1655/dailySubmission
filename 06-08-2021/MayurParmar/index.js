// const months = ["jan", "feb", "march", "april", "june"];
// const index = months.indexOf("apridsl");
// if (index != -1) {
//   months.splice(index, 1, "Apirl");
//   for (elements of months) {
//     console.log(elements);
//   }
// } else {
//   console.log("No found the this element....");
// }

// a = [1, 23, 3, 4, 5, 6, 7, 8, 9];
// const map_method = a.map((currentArray, arrayIndex, array) => {
//   // return currentArray > 7;
//   return (
//     "Current Array: " +
//     currentArray +
//     " array index:  " +
//     arrayIndex +
//     " array: " +
//     array
//   );
// });
// console.log(a);
// console.log(map_method);

// let b = 20;
// if (b == 20) {
//   for (let i = 0; i <= b; i++) {
//     console.log(i + " for loop");
//   }
// }

// console.log(Math.sqrt(9));

// let arr = [2, 4, 6, 8, 10];
// let newarray = arr
//   .map((obj) => {
//     obj * 2;
//   })
//   .filter((cuurent) => {
//     return cuurent > 10;
//   });
// console.log(newarray);

// let arr = [1, 2, 3, 4, 5];
// const newarr = arr.reduce((accumulator, currentArray, index, array) => {
//   return (accumulator += currentArray);
// });
// console.log(newarr);

// converting 3d and 3d `    array into  one dimensional array
// const arr = [
//   ["1", "2"],
//   ["3", "4"],
//   ["5", "6"],
//   ["7", "8"],
// ];
// const flatArray = arr.reduce((accumulator, curremtElement) => {
//   return accumulator.concat(curremtElement);
// });
// console.log(flatArray);

// string constructore create string
// const stringCon = new String("Mayur Parmar");
// console.log(stringCon);

// const name = "mayur";
// console.log(name);

// String.prototype.length
// // length property of string
// let name = "Parmar Mayur";
// console.log(name.length);

// escape character \"="", \'=', \\=\
// const name = "Mayur \"parmar\" \\ 'dfsdsd' ";
// console.log(name);

// String.protorype.indexOf(searchValue ,[fromIndex])
let name = "my name is Mayur Parmar";
console.log(name.indexOf("r"));
console.log(name.lastIndexOf("r"));
console.log(name.indexOf("Mayur"));
console.log(name.indexOf("a"));
console.log(name.indexOf("a", 5));
console.log(name.lastIndexOf("a"));
console.log(name.lastIndexOf("a", 20));
