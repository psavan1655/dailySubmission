//   ------------------------------------- Conditions Branching - If and ? ----------------------------------------------------

console.log('------- Conditions Branching - If and ? ------')

console.log('Example of If-Else')
const Num = prompt('Mobile Number ?')
if (Num == 123456) {
  console.log('The Number You Entered is : ' + Num)
} else {
  console.log('The Number is Entered you is Wrong')
}

console.log('Example of Ternery operator')
const n = prompt('Enter Value : ', 11)
n == 11
  ? console.log('The Number you Entered is Matched')
  : console.log('The Number you Entered is Not Matched')

//   ------------------------------------- Logical Operators ----------------------------------------------------

console.log('------- Logical Operators ------')

console.log('---------- && Operator -------- ')
const num1 = 10
const num2 = 15
console.log('Num1 is :', num1, 'and', 'Num2 is :', num2)
if (num1 == 10 && num2 == 15) {
  console.log('You are Right')
} else {
  console.log('You Are Wrong Num1 is 10 and Num2 is 15 is not Matched')
}

if (num1 == 10 && num2 == 14) {
  console.log('You are Right')
} else {
  console.log('You Are Wrong Num1 is 10 and Num2 is 15 is not Matched')
}

console.log('------- Logical Operators ------')

console.log('---------- !(Not) Operator -------- ')
const notNum1 = 10
const notNum2 = 15
console.log('Num1 is :', notNum1, 'and', 'Num2 is :', notNum2)
if (!notNum1 == 10) {
  console.log('You are Right')
} else {
  console.log('You Are Wrong Num1 is 10 and Num2 is 15 is not Matched')
}

console.log('------- Logical Operators ------')

console.log('---------- ||(OR) Operator -------- ')
const orNum1 = 10
const orNum2 = 15
console.log('Num1 is :', orNum1, 'and', 'Num2 is :', orNum2)
if (orNum1 == 10 || orNum2 == 15) {
  console.log('You are Right')
} else {
  console.log('You Are Wrong Num1 is 10 and Num2 is 15 is not Matched')
}

//   --------------------------------- Nullish coalescing operator -----------------------------------------

console.log("----- Nullish coalescing operator '??' -----\n")

// if the variable is defied and we use ?? operator then it return variable, otherwise is returns second value;
const newName = 'Hitesh Gohel'
console.log(newName ?? 'Undefined Value')

//   --------------------------------------- While Loop Example ----------------------------------------

console.log('----------- While Loop Example ------------\n')
let num = 1
while (num < 10) {
  console.log('Number :', num)
  num++
}

//   ------------------------------------------ For Loop Example -----------------------------------------------------

console.log('----------- For Loop Example ------------\n')
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('Number', i)
  }
}

//   ----------------------------------------- Switch Example --------------------------------------------------

console.log('----------- Switch Example ------------\n')
const switchNum = 11
switch (switchNum) {
  case 5:
    console.log('Value is Not Matched')
    break
  case 10:
    console.log('Value is Matched', switchNum)
    break

  default:
    console.log('Default')
}

//   --------------------------------------------- Simple Function --------------------------------------------

console.log('----------- Simple Function Example ------------\n')
function Herry() {
  console.log('I am in The Function')
}

Herry()

//   --------------------------------------------- Parameterized Function --------------------------------------------

console.log('----------- Parameterized Function Example ------------\n')
function Addition(a, b) {
  console.log('Addition is :', a + b)
}

Addition(150, 50)

//   --------------------------------------------- Function Expression Example--------------------------------------------
console.log('------------- Function Expression Example -----------------------')
let herry = function (que, yes, no) {
  if (confirm(que)) {
    yes()
  } else {
    no()
  }
}

function agree() {
  console.log("I'm Agree")
}
function notAgree() {
  console.log('Not Agree')
}

herry('Are You Agree : ', agree, notAgree)

//   --------------------------------------------- Arrow Function Example --------------------------------------------

console.log('------------- Arrow Function Example ------------')
let addition = (arrowNum1, arrowNum2) => arrowNum1 + arrowNum2
console.log('The Addition of 250 and 125 is :', addition(250, 125))

// 2. Exercise
// const age = prompt("What's Your Age :", 18)
// let done =
//   age < 18 ? () => alert('You are not Adult') : () => alert('You are Adult')
// done()

// 3. Site Task
// let ask = (que, yes, no) => (confirm(que) ? yes() : no())
// ask(
//   'Are You Agree',
//   () => alert('Agree'),
//   () => alert('Not Agree')
// )

//   --------------------------------------------- Object Example --------------------------------------------

let user = {}
user.name = 'John'
user.surname = 'Smith'
console.log(user)
user.name = 'Pete'
console.log(user)
delete user.name
console.log(user)

//   --------------------------------------------- Object references and copying --------------------------------------------

const info = {
  name: 'Hitesh Gohel',
  age: 21,
  address: { city: 'Ahemedabad', state: 'Gujrat', country: 'India' },
}
console.log('User Data :', info)

const copyInfo = info
console.log('CopyInfo Object Data :', copyInfo)

let onlyAddress = info.address
console.log('User Address :', onlyAddress)

onlyAddress.city = 'Mumbai'
console.log('New User Address :', onlyAddress)

onlyAddress = { ...onlyAddress, state: 'Maharashtra', country: 'India' }
console.log('Updated Address : ', onlyAddress)

//   --------------------------------------------- Exercise --------------------------------------------

console.log('Before Execution : ', b)
var b
b = 25
console.log('First B :', b, 'and', 'DataType :', typeof b)
b = true
console.log('Second B :', b, 'and', 'DataType :', typeof b)
