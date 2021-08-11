//32- Display Fibonacci Series
const fibonacciNum = 10;
let num1 = 0;
let num2 = 1;
var sum;
sum = num1 + num2;

while (sum <= fibonacciNum) {
  console.log(sum);

  num1 = num2;
  num2 = sum;
  sum = num1 + num2;
}
console.log(`Fibonacci Series:${num1} and ${num2}`);

//33- Find LCM of two Numbers
const lcm = (fnum, snum) => {
    let largest_num = fnum > snum ? fnum : snum;
    let smaller_num = fnum < snum ? fnum : snum;

    let find_lcm = largest_num;
    while (find_lcm % smaller_num !== 0) {
        find_lcm += largest_num;
    }
    return find_lcm;
};
console.log(lcm(5, 6));
//34- Check Whether a Number is A Palindrome or Not

const palindrome = () => {
  let rem, temp, final = 0;
  let pnum = 121;
  temp = pnum;
  while (pnum > 0) {
    rem = pnum % 10;
    pnum = parseInt(pnum / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    console.log("The number is Palindrome");
  }
  else {
    console.log("The number is Not Palindrome");
  }
  return (temp);
}
console.log(palindrome());
//35- Count Number of Digits of an Integer

const count = (n) => {
  let countNum = 0;
  if (n >= 1) ++countNum;
  while (n / 10 >= 1) {
    n /= 10;
    ++countNum;
  }
  return (countNum);
}
console.log(count(12112));
    //or
let number = 1000;
let countnumber = 0;
while (number != 0) {
    number=Math.floor(number/10)
    ++countnumber
}
console.log(countnumber);
//36- Find A Generic Root Of Number
var gnum = 12345;
var newTemp,
    newRem,
    gSum = 0;
newTemp = gnum;
while (newTemp > 0) {
  newRem = newTemp % 10;
  gSum = gSum + newRem;
  newTemp =Math.floor(newTemp / 10);
  if (newTemp == 0) {
    if (gSum > 9) {
      newTemp = gSum;
      gSum = 0;    
    }   
  }
}
console.log(`Generic Root of ${gnum},${gSum}`);
//37-Generate IP (Internet Protocol) Addresses Using

//38- Print Multiplication Table Using
const tableNum = 2;
for (let i = 1; i <= 10; i++){
  const result = i * tableNum;
  console.log(`${tableNum}*${i}=${result}`);
}
//39- Sort A Float Array In Ascending And Descending Order Using
let numbers = [5, 13, 1, 44, 32, 15, 500];
let numbers2 = [5, 13, 1, 44, 32, 15, 500];
let lowestToHighest = numbers.sort((a, b) => a - b);
let highestToLowest = numbers2.sort((a, b) => b - a);
console.log(lowestToHighest);
console.log(highestToLowest);

//40-Create a Simple Calculator using switch case
let add = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
let mul = (a, b) => {
  return a * b;
};
let div = (a, b) => {
  return a / b;
};
let choice = 4;
switch (choice) {
  case 1:
    let add_ans = add(12, 23);
    console.log(add_ans);
    break;
  case 2:
    let sub_ans = sub(23, 10);
    console.log(sub_ans);
    break;
  case 3:
    let mul_ans = mul(12, 12);
    console.log(mul_ans);
    break;
  case 4:
    let div_ans = div(12, 6);
    console.log(div_ans);
    break;

  default:
    break;
}

//41- Find A Grade Of Given Marks or (Find a Grade of Given Marks Using Switch Case)


  
  function getResult(score) {
  var gscore;

  switch(true) {
    case (score <= 100 && score >= 90):
       gscore = 'You Obtain A Grade';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'You Obtain B Grade';
         break;
    case (score <= 79 && score >= 70):
        gscore = 'You Obtain C Grade';
         break;
       case (score <= 69 && score >= 60):
        gscore = 'You Obtain D Grade';
         break;
    case (score <= 59 && score >= 0):
        gscore = 'Opps You are FAIL';
        break;

    case (score > 100 && score < 0):
        gscore = 'INVALID SCORE';
        break; 

     case (score <= 2 && score >= 0):
        gscore += '-';
        break; 

      case (score <= 9 && score >= 8):
        gscore += '+';
        break; 

    default:
      return 'INVALID SCORE';
}

  return gscore;
}
console.log(getResult(88));

// 42- Find Radius, Circumference and Volume of Cylinder
let radius = 20;
let pi = 3.14;
let height = 30;
let newChoice = 2;
switch (newChoice) {
  case 1:
    let circle = radius * radius * pi;
    console.log(`Area of Circle:${circle}`);
    break;
  case 2:
    let circumference = 2 * radius * pi;
    console.log(`Circumference of Circle:${circumference}`);
    break;
  case 3:
    let cylinder = radius * radius * pi * height;
    console.log(`Volume of cylinder :${cylinder}`);
    break;
  default:
    break;
}
// 44- Insert An Element Desired or Specific Position In An Array
const months = ["jan", "fed", "march", "april", "june", "july"];
const newMonth = months.splice(months.length, 0, "Dec");
console.log(months);
const bod = [12,8,1994,1,11,1996];
const indexOfMonth = bod.indexOf(8);
const Month = bod.splice(indexOfMonth, 1);
console.log(Month);
console.log(bod);

