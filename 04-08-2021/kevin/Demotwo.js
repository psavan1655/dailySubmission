//variable
var name = "kevin";
console.log(name);
//let
let lName = "Mr.ravan";
lName = "0111"
console.log(lName);
//const
const fName = "Mr.Harshil";
    // fName = "Mr.saif";
console.log(fName);


var _1kevin = "kevinP";
console.log(_1kevin);



//Null
let ageMy = null
console.log(ageMy);
console.log(typeof(ageMy));

//Data Type

//undefined

let age = 100;
age = undefined
console.log(age);
console.log(typeof(age));
//string
let myName = "mr.kp"; 
console.log(myName);
console.log(typeof (myName));
// number
let myAge = "24";
console.log(myAge);
console.log(typeof (myAge));
//boolean
let myNameIsKevin = true; 
console.log(myNameIsKevin);
console.log(typeof(myNameIsKevin));
//BigInt
let bigInt = 12343567899775532344664n;
console.log(bigInt);
console.log(typeof (bigInt));

//Interaction
//alert
// alert("kevin");
// //prompt
// let my= prompt('my name is kevin', 0111);
// alert(`${my} BOD!`);
// //confirm
// let rajbhai = confirm("Are you the boss?");

// alert(rajbhai);

//exp
console.log(10 + "20");
console.log(9 - "5");
console.log("" + 0);
console.log("kevin" + "patel");
console.log("kevin" - "patel");
console.log(true + true);
console.log(true + false);
console.log(true - false);
console.log(false - true);

//NaN
let myPhone = 9898989898;
let myCompany = "vodafone";
console.log(isNaN(myPhone));
console.log(isNaN(myCompany));

//exp 
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));


//Operater

//Assignmet
let x = 1;
x = -x;
console.log(x);//unary

let z = 1;
let y = 2;
console.log(z + y);//binary

let a = 2;
let b = 2;
console.log("same" + a == b);
console.log(`same : + ${a==b}`);

//Arithmetic
console.log(9 + 6);
console.log(9 - 6);
console.log(9 * 6);
console.log(9 / 6);
console.log("operator" + 81 % 8);

//increment and decrements
//postFix increnement
var num = 15;
var namNum = num++;
console.log(num);
console.log(namNum);

//postFix decrements

var num = 15;
var namNum = --num;
console.log(num);
console.log(namNum);

//perFix increment 
var num = 15;
var namNum = ++num;
console.log(num);
console.log(namNum);
//perFix decrements 
var num = 15;
var namNum = --num;
console.log(num);
console.log(namNum);


var k = 30;
var l = 20;
//Equal (==)
console.log(k == l);
