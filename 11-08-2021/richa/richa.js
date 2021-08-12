


// var Circle = (function() {   //area and circumference of circle
//     function Circle(Radius) {  
//      this.Radius = Radius;  
//     }  
//     Circle.prototype.AreaOfCircle = function() {  
//      return 3.14  this.Radius  this.Radius;  
//     };  
//     Circle.prototype.CircumferenceOfCircle = function() {  
//      return 2  3.14  this.Radius;  
//     };  
//     return Circle;  
//    })();  
//    var circle = new Circle(5);  
//    var area = circle.AreaOfCircle();  
//    var circumference = circle.CircumferenceOfCircle();  
//    console.log("The Area of the Circle is :" + area);  
//    console.log("The circumference of the Circle is :" + circumference);


// let char = '$'; //ascii value
// console.log(char.charCodeAt(char));


// var side1 = 5; //area of triangle 
// var side2 = 5; 
// var side3 = 5; 
// var perimeter = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

//  const abbrev_name = function(str1) { // character into abbreviated
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return ( " " +split_names[0].charAt(0) + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrev_name("ruchit shah"));



// let Fahrenheit = 85; //converting  celsius into fahrenheit
// let celsiusToFahrenheit = ()=>{
//     return Fahrenheit - 32 * 0.56;
// }
// console.log(celsiusToFahrenheit());


// let p = 800; //finding simple intrest
// let r = 6;
// let n =4;
// let simpleIntrest = ()=>{
//     return (p  r n) / 100;
// }
// console.log(simpleIntrest());


// let salary = { // gross salary
//     BS: 480000,
//     DA: 48000,
//     HRA: 96000,
//     CA: 12000,

//     EA: 12000,
//     MI: 12000,
//     IT: 50000,
//     PF: 57600,
//   }
//   console.log(salary)
//   const { BS, DA, HRA, CA, EA, MI } = salary
//   let grossSalary = BS + DA + HRA + CA + EA + MI
//   console.log('Gross Salary Is :' + grossSalary);
  
// let subjects = {  //percentage
//     Maths: 85,
//     Science: 96,
//     SocialScience: 81,
//     English: 74,
//     Hindi: 71,
//   }
//   console.log(subjects)
//   const { Maths, Science, SocialScience, English, Hindi } = subjects
//   let total = Maths + Science + SocialScience + English + Hindi
//   let percentage = total / Object.keys(subjects).length
//   console.log('Percentage is : ' + percentage + '%');
//   console.log(`Total Marks : ${total}
//   Percentage : ${percentage}%`

//  function factorial (n){ //find factorial of given number
     
//      if(n==0|| n==1){
//       return 1;
//        }
//        else{
//           return n * factorial(n-1);
//        }
//  }
//  let n = 6 ;
// const answer = factorial(n)
//  console.log("the factorial of " +n+"is"+ answer);


// let num =(2) //find number into powervalue
// let pow =(4)
// console.log(Math.pow(num,pow));


// let num1 = 42 // find LCM
// let num2 = 48

// let min = num1 > num2 ? num1 : num2
// while (true) {
//   if (min % num1 == 0 && min % num2 == 0) {
//     console.log(`LCM of ${num1} and ${num2} : ${min}`);
//     break
//   }
//   min++
// };


// let GCD = (num1, num2) => {  //find GCD
//     while (num1 !== num2) {
//       num1 > num2 ? (num1 = num1 - num2) : (num2 = num2 - num1)
//     }
//     console.log(`The GCD is ${num2}`);
//   }
//   GCD(266, 88)



// let num1 = 12  //if else find greater number
// let num2 = 36
// let num3 = 24
// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is Greatest from All Numbers`);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`${num2} is Greatest from All Numbers`);
// } else {
//   console.log(`${num3} is Greatest from All Numbers`);
// };





// let no =15; //find number is positive or negative
// if(no > 0)
// {
//     console.log("Number is Positive");
// }
// else if (no < 0)
// {
//     console.log("Number is Negative");
// }
// else{
//     console.log("Number is Zero");
// }



// let char="u"; //character is vowel or consonent
// if (char==="a"||char==="A" ||char==="e"||char==="E"||char==="i"||char==="I"||char==="o"||char==="O"||char=="u"||char==="U")
// {
//     console.log("This is vowel");
// }
// else {
//     console.log("this is consonent");
// }

// let alphabet = 'a'
// function isCharacterALetter(alphabet) {
//     return (/[a-zA-Z]/).test(alphabet)
//   }
//   console.log(isCharacterALetter(alphabet));

// let alphabet ="k"; //character is alphabet or not
// if ("/[a-zA-Z]/i")
// {
//     console.log("this is alphabet");

// }
// else {
//     console.log("this is not an alphabet");
// }

// const alphabet =(alpha)=>{
// if(alpha=="a"||  alpha=="b" || alpha=="c"){
//     return "alpha"
// }
// else return "notalpha"
// }
// console.log(alphabet("b"));


//  let num =23 ;//number is even or odd
//  if(num  % 2==0)
//  {
//      console.log("Number is even ");
//  }
// else {
//       console.log("Number is odd");

// }

 

// let age =85; //check vote elligibility
// if(age >= 18)
// {
//     console.log("you are elligible to vote");
// }
// else  
// {
//     console.log("you are not elligible to vote");
// }



// let num =4 ;//number is divisible by 5 or 11
// if(num  % 5==0)
// {
//     console.log("Number is divisible by 5 ");
// }
// else if(num %11==0)
//  {
//      console.log("Number is divisible by 11");

// }
// else{
//     console.log("this is number");
// }
