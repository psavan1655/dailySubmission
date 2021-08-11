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
// let name = "my name is Mayur Parmar";
// console.log(name.indexOf("r"));
// console.log(name.lastIndexOf("r"));
// console.log(name.indexOf("Mayur"));
// console.log(name.indexOf("a"));
// console.log(name.indexOf("a", 5));
// console.log(name.lastIndexOf("a"));
// console.log(name.lastIndexOf("a", 20));

// serach in string
// const name = "my name is Mayur Parmar";
// console.log(name.search("is"));

// extracting string parts
// // 1. slice
// const name = "my name is Parmar Mayur K";
// console.log(name.slice(1, 3));
// console.log(name.slice(1, -1));
// console.log(name.slice(1));
// // task 1:
// const add =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium aspernatur corporis totam mayur corrupti consequatur, modi blanditiis, repudiandae voluptatum odio reiciendis, pariatur libero aliquam autem quisquam ab nisi. Aut, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus nobis tenetur, error cum culpa sunt. Corporis ducimus tempora, sit, non iure facilis maiores rerum atque ratione consectetur sequi eius earum quis, fuga fugit nesciunt iste? Provident assumenda illo debitis.";
// console.log(add.slice(0, 288));
// 2.substring
// const name = "my name is Parmar Mayur K";
// console.log(name.substring(1, 3));
// console.log(name.substring(5, -1)); // not gives negative value
// // 3. substr
// const name = "my name is Parmar Mayur K";
// console.log(name.substr(1, 3));
// console.log(name.substr(1, -3));
// console.log(name.substr(-7));

// // String replace method
// const name = "my name is mayur parmar. mayur I am from gandhinagar ";
// console.log(name.replace("mayur", "MAYUR"));
// console.log(name.replace("MAYUR", "mayur"));
// console.log(name.replaceAll("mayur", "MAYUR"));

// let info = {
//   name: "Hitesh Gohel",
//   age: 21,
//   address: { city: "Ahemedabad", state: "Gujrat", country: "India" },
// };
// console.log("User Data :", info);

// let copyInfo = info;
// console.log("CopyInfo Object Data :", copyInfo);

// let onlyAddress = info.address;
// console.log("User Address :", onlyAddress);

// onlyAddress.city = "Mumbai";
// console.log("New User Address :", onlyAddress);

// onlyAddress = { ...onlyAddress, state: "Maharashtra", country: "India" };
// console.log("Updated Address : ", onlyAddress);

// function
// function add(a, b) {
//   console.log("====================================");
//   console.log(a);
//   console.log("====================================");
// }
// let ab;
// add((ab = 20), 10);

// let a = 10;
// a++; //11
// a++; //12
// a++; //13
// let c = ++a; //14
// let b = a++; // 15
// console.log(a); //15
// console.log(b); //15
// console.log(c); //14

// let mayur = 19999;
// mayur++; // 20,000
// ++mayur; //20,001
// mayur++; //20,002
// mayur++; //20,003
// mayur++; //20,004
// mayur++; //20,005
// mayur++; //20,006
// mayur++; //20,007
// mayur++; //20,008
// mayur++; //20,009
// mayur++; //20,010
// let mk = ++mayur; //20,011
// let parmar = mayur++; // 20,011
// console.log(mk); // 20,011h //20011m/20000s //20009
// console.log(parmar); //20,011h //20011m/20000s //20010
// console.log(mayur); //20,011h //20012m/19999s
