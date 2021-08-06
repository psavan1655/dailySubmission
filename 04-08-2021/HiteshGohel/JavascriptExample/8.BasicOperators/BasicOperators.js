console.log('------- Basic Operators Example -------')

console.log(
  'Operands is Value. What we define in expressions\n Here, 25 + 5\n 25 and 5 is operand and + is operator'
)

console.log('\n')
// Unary Operators
const x = 1
console.log('Unary Operator Example :', -x)

// Binary Operators
const num1 = 10
const num2 = 15
console.log('Binary Operator Example\n num1 + num2 is :', num1 + num2)

console.log('\n')
// Aritimatic Operators

// 1. Addition
console.log('Addition Operator Example\n 25 + 25 is :', 25 + 25)

// 2. Subtraction
console.log('Subtraction Operator Example\n 25 - 25 is :', 25 - 25)

// 3. Multiplication
console.log('Multiplication Operator Example\n 25 * 25 is :', 25 * 25)

// 4. Division
console.log('Division Operator Example\n 25 / 25 is :', 25 / 25)

// 5. Remainder
console.log('Remainder Operator Example\n 25 % 4 is :', 25 % 4)

// 6. Exponentiation
console.log('Exponentiation Operator Example\n 25 ** 2 is :', 25 ** 2)

console.log('\n')
// String concatenation with binary +
const string1 = 'Hitesh' + ' ' + 'Gohel'
const string2 = '11' + 10
const string3 = '11' - 10
console.log('String concatenation :', string1)
console.log('String concatenation With Number :', string2)
console.log('String concatenation :', string3)

console.log('\n')
// Numeric conversion, unary +
const strNum1 = '2'
const strNum2 = '3'
console.log('Number Conversion : ', strNum1 + strNum2)

const strNum3 = '2'
const strNum4 = '3'
console.log('Number Conversion :', +strNum3 + +strNum4)

console.log('\n')
// Operator precedence
console.log('Operator Precedence\n 15 + 25 * 2 :', 15 + 25 * 2)

console.log('\n')
// Assignment = returns a value
const assNum1 = 5
const assNum2 = 10
let assNum3
console.log(
  'Assignment Example\n ? = 5 + (10 * 5) :',
  (assNum3 = assNum1 + assNum2 * assNum1)
)

console.log('\n')
// Chaining assignments
const chainNum1 = (chainNum2 = chainNum3 = 25)
console.log('Chinning Example \n A = B = C = 25\n A = ? :', chainNum1)

console.log('\n')
// Increment / decrement
let counter = 2
counter++ // works the same as counter = counter + 1, but is shorter
console.log('Increment Example\n Counter = 2\n counter++ :', counter)
counter--
console.log('Decrement Example\n Counter = 3\n counter-- :', counter)

let newCounter1 = 25
const CounterBData = ++newCounter1
console.log('Prefix Counter Example\n Counter = 25\n ++counter :', CounterBData)

let newCounter2 = 25
const CounterAData = newCounter2++
console.log(
  'Postfix Counter Example\n Counter = 25\n counter++ :',
  CounterAData
)

console.log('\n')
// Comma
// const CommaNum = 10 + 20, 250 + 250
// console.log('Comma Example : ', CommaNum)

// Task
const a = window.prompt('First number?', 1)
const b = window.prompt('Second number?', 2)
window.alert(String(a) + String(b)) // 12
