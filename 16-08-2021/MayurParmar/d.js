// destructuring of array
// let myData = ["Mayur", "Parmar", 23];
// let [fname, lname, age, degree = "MCA"] = myData;
// console.log("FirstName : " + fname);
// console.log("LastName : " + lname);
// console.log("Age : " + age);
// console.log("Degree : " + degree);

// destructuring of object
// let myObj = {
//   firsname: "Mayur",
//   lastName: "Parmar",
// };
// const { firsname, lastName, Age = 24 } = myObj;
// console.log("FirstName : " + firsname);
// console.log("LastName : " + lastName);
// console.log("Age : " + Age);

// object Properties
// let myName = "Mayur";
// let mayur = "mayur";
// let num = 2 + 4;
// let myBio = {
//   [myName]: "PAremar",
//   [num]: "6",
//   myname: "Gandhinagar",
//   mayur,
//   100: 4,
//   [2 + 6]: 6,
// };
// console.log(myBio);

//spread operator
// let arr = [1, 2, 3];
// let arr1 = [...arr, 4, 5];
// console.log(arr1);

// Ecma Script ES7
// const arr2 = [1, 2, 3]; // array include
// const isPresent = arr2.includes(1);
// console.log(isPresent);
// console.log(2 ** 3); //Exponentiation operator
// console.log(2 ** 4); //Exponentiation operator
// console.log(2 ** 8); //Exponentiation operator

// EcamaScript ES8
// 1.string padding
// const age = "23".padStart(5);
// console.log('"' + age + "'");
// const ma = "21".padEnd(5);
// console.log('"' + ma + '"');
// const bo = "12".padStart(10).padEnd(10);
// console.log('"' + bo + '"');
// // 2. Object Value
// const person = { name: "Mayure", age: 23 };
// console.log(Object.values(person));
// // 3.Object entries
// console.log(Object.entries(person));
// console.log(person);
// // 4. object spread
// const myBio = { name: "mayur", age: 23 };
// const newMyBio = { ...myBio, gender: "Male" };
// console.log(newMyBio);

// EcmaScript ES9
// flat array
// const arr = [
//   [1, 2],
//   [2, 45],
//   [32, 545],
//   [1, [323, 32]],
//   [2, 43, [3, 43, 3, [32323, 32]]],
// ];
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));
// console.log(arr);
// formEntries
// const arr = [1, 2, 3, 3];
// const a = Object.entries(arr);
// console.log(Object.fromEntries(a));

// EcmaScript 2020
// let no = Number.MAX_SAFE_INTEGER;
// // no = no + 12n;//Error
// no = BigInt(no) + 12n;
// console.log(no);
// const newNo = 9007199254740991n + 12n;
// console.log(newNo);

// ECMASCRIPT 2014
// "use strict";
// // x = 14;//error to use Stric
// let x = 14;
// console.log(x);

// Higher order function and callback function

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const calculater = (a, b, operator) => operator(a, b);
console.log(calculater(1, 2, add));
today, i'll learn setTimeout,setInterval,clearTimeout,clearInterval  
2. object literals and this keyword
3. Destructuring in ES6 
4. Object Properties