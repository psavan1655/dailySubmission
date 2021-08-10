//1 Area and Circumference of a Circle
//12 Area of a Circle
let pi = 3.14;
let r = 3;

let circumference = () => {
    return (
        // pi * r ** 2//
        2*pi*r
    );
}
console.log(circumference());
//2 Print Ascii Value of the Character
let Value = "C";
const asciiValue = Value.codePointAt(0);
console.log(`The ASCII value is: ${asciiValue}`);

//3 Area of Triangle
let l = 2;
let b = 3;

const triangle = () => {
    return (
        l*b/2
    );
}
console.log(triangle());
//4 Convert a Person’s Name in Abbreviated
const name = "kevin patel";
const ravan = name.split(" ");

console.log(`${ravan}`);
console.log(`convet name of:${ravan[0].charAt(0)}.${ravan[1].charAt(0)}`);

//5 Simple Interest
const P = 5000;
const T = 5;
const R = 3;
const intere = () => {
    return (
        P * T * R / 100
    );
    
}
console.log(intere());
//6 Gross Salary of an Employee
const BS = 18000;
const HRS = 5000;
const pTax = 150;
const pFund = 200;

const Gross = () => {
    return (
        BS + HRS + pTax + pFund
    )
}
console.log(Gross());
//7 Percentage of 5 Subjects
const Totalemarks = 350;
const totalSub = 500;

const pre = () => {
    return (
        Totalemarks * 100 / totalSub);
}
console.log(pre());
//8 Converting Temperature Celsius into Fahrenheit
const cel = 30;
console.log(40*9/5+32);

//10- Factorial of a Given Number
let numfb = 5;
let fat = 1;
while (numfb>0) {
    fat = fat * numfb;
    numfb--;
}
console.log(fat);

//11 Read Integer (N) and Print the First Three Powers (N^1, N^2, N^3)
const numOne = 5;

const powers = () => {
    return (
        numOne+" "+numOne*numOne+" "+numOne*numOne*numOne
    )
}
console.log(powers());

//13 LCM of Two Numbers

const num1 = 12;
const num2 = 18;

let min = (num1 > num2) ? num1 : num2; //18

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++
}


//14 GCD of Two Numbers
const gdc = (a,b) => {
    if (b===0) {
        return a;
    }
    return gdc(b,a%b)
};
console.log(gdc(10, 20));


//15- The Greatest Number Among the Given Three Number (Also try for greatest number among n numbers)

const firstNo = 20;
const secondNo = 30;
const thirdNo = 50;

if (firstNo >= secondNo && firstNo >= thirdNo) {
   console.log("firstNum largest" +" "+firstNo);
} else if (secondNo >= firstNo && secondNo >= thirdNo) {
    console.log("secondNum largest" +" "+secondNo);
} else {
    console.log("ThirdNum largest" + " " + thirdNo);
}

//16- The Number Is Positive or Negative

const Num01 = 0;

if (Num01 > 0) {
    console.log("The number is positive");
} else if(Num01 == 0){
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}

//17- Character Is Vowel or Consonant

const character = "p";

if (
    character == "a" ||
    character == "A" ||
    character == "e" ||
    character == "E" ||
    character == "i" ||
    character == "I" ||
    character == "o" ||
    character == "o" ||
    character == "u" ||
    character == "U"
) {
console.log("Its a vowel");
 }
else if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
    console.log("Its a consonant");
} else {
    console.log("Invalid input please enter an alphabet");
}
//18- A Character Is an Alphabet or Not
const alphabet = 5;

function isCharacterALetter() {
  return /[a-zA-Z]/.test(alphabet);
}
console.log(isCharacterALetter(alphabet));

//19- The Number Is Even or Odd

const num02 = 4;
if (num02 % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//20- Leap Year
let year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("this is " + year + " leap year");
    } else {
      console.log("this is " + year + " is Not leap year");
    }
  } else {
    console.log("this is " + year + " leap year");
  }
} else {
  console.log("This is " + year + " not leap year");
}

//21- The Date Is Correct or Not
const dd = 30;
const mm = 10;
const yyyy = 2021;
// console.log("Date is Not Valid");
//year
if (yyyy >= 1900 && yyyy <= 9999) {
    console.log(`Year is valid ${yyyy}`);
    //month
    if (mm>=1 && mm<=12) {
        console.log(`Month is valid ${mm}`);
        if ((dd>=1 && dd<=31)&&(mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12)) {
           console.log(`Date is valid ${dd}`); 
        } else if ((dd >= 1 && dd <= 30) && (mm == 4 || mm== 6 || mm==9 || mm == 11)) {
           console.log(`Date is valid ${dd}`); 
        }else if ((dd >= 1 && dd <= 28) && (mm == 2)) {
            console.log(`Date is valid ${dd}`);
        } else if ((dd == 29 && mm == 2 && (yyyy % 400 == 0 || (yyyy % 4 == 0 && yyyy % 100 != 0)))) {
            console.log(`Date is valid ${dd}`);
        } else {
            console.log(`Day is not valid ${dd}`);
        }
    } else {
        console.log(`Month is not valid ${mm}`);
    }
} else {
    console.log(`Year is not valid ${yyyy}`);
}
console.log(`${dd}/${mm}/${yyyy}`);

// or

let d1 = "29/02/2021";

const date = new Date(d1);

if (date == "Invalid Date") {
  console.log("The Date Is NOT Correct ");
} else {
  console.log("The Date Is Correct ");
}
 
//22- Voting Eligibility Checker
const votingAge = 15;

if (votingAge >= 18) {
    console.log("Eligibility for Voting");
} else {
    console.log("Not Eligibility for Voting");
}

//23- Check whether a number is divisible by 5 and 11 or not.

const whetherNo = 50;
if (whetherNo % 5 == 0 && whetherNo % 11 == 0) {
    console.log("Whether a number");
} else {
    console.log("Not Whether a number");
}

//24- Input week number and print weekday.
let week = 8;
if (week == 1) {
    console.log("Monday");
} else if (week == 2) {
    console.log("Tuesday");
} else if (week == 3) {
    console.log("Wednesday");
} else if (week == 4) {
    console.log("Thursday");
} else if (week == 5) {
console.log("Friday");
} else if (week ==6) {
    console.log("Saturday");
} else if (week == 7) {
    console.log("Sunday");
} else {
    console.log("Not a Week");
}

//26- Input angles of a triangle and check whether the triangle is valid or not.
const a = 7;
const B = 10;
const C = 5;

const Validity = (a,B,C) => {
    if (a + B <= c || a + c <= B || B + c <= a) {
        console.log("Invalid");
    } else {
        console.log("Valid");
    }
 return Validity();
}


// 27- Check whether the triangle is an equilateral, isosceles or scalene triangle.
const site1 = 2;
const site2 = 2;
const site3 = 4;

if (site1 == site2 && site2 == site3) {
    console.log("The Given Triangle is equilateral");
} else if (site1 == site2 || site2 == site3 || site3 == site1)
{
    console.log("The given Triangle is isosceles");
} else {
    console.log("The given Triangle is scalene");
}

//28- Find all roots of a quadratic equation.
let root1, root2;
let A = 8;
let D = 2;
let c = 12;


let discriminant = D * D - 4 * A * C;


if (discriminant > 0) {
    root1 = (-D + Math.sqrt(discriminant)) / (2 * A);
    root2 = (-D - Math.sqrt(discriminant)) / (2 * A);


    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -D / (2 * A);


    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-D / (2 * A)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * A)).toFixed(2);

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

// 29 -Reverse A given Number

var rNum = 25456;
var rev = 0, rem;

while (rNum > 0) {
    rem = rNum % 10;
    rev = rev * 10 + rem;
    rNum = Math.floor(rNum / 10);
}
console.log(`The given number is :${rNum} The reversed number is : ${rev}`);

// 30- Find Number Is Armstrong Or Not

let sum = 0;
const numberOne = 371;
let temp = numberOne;
while (temp > 0) {
  let reminder = temp % 10;
  sum += reminder * reminder * reminder;
  temp = parseInt(temp / 10); 
}
if (sum == numberOne) {
  console.log(`${numberOne} is an Armstrong number`);
} else {
  console.log(`${numberOne} is not an Armstrong number.`);
}

//31- Calculate Sum of Natural Numbers
let sum1 = 0, i = 0, n = 7;
while (i <= n)
{
    sum1 += i;
    i++
}
console.log(sum1);

//32- Display Fibonacci Series

const fibNumber = 2;
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");
console.log(n1);
console.log(n2);

nextTerm = n1 + n2;

while (nextTerm <= fibNumber) {
  console.log(nextTerm);

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}