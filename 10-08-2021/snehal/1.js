// 1 Area and Circumference of a Circle
let r=10
function circlearea()
{
    let area=Math.PI*r*r;
    console.log('area of circle is:'+area);
    let circum=Math.PI*2*r;
    console.log('circumference:'+circum);
}
console.log(circlearea());

// 2 Print Ascii Value of the Character
let char="b";
console.log(char.charCodeAt());

// 3 Area of Triangle
let b=5,hight=11;
aratriangle=(b*hight)/2;
console.log("area of triangle:"+aratriangle);

// 4 Convert a Person’s Name in Abbreviated

let name="snehal";
let father="sureshbhai";
let surname="parmar";

console.log(name.charAt(0)+" "+father.charAt(0)+" "+surname);

// 5 Simple Interest
let p=100,ra=12,n=2;
si=(p*ra*n)/100;
console.log("simpple interest:"+si);


// 6- Gross Salary of an Employee

let basic=48000,hra=9600,da=4800,ma=1200;
gross=basic+hra+da+ma;
console.log('gross salary:'+gross);

// 7 Percentage of 5 Subjects

let math=80,ss=78,sc=65,eng=59,hindi=87;
total=math+ss+sc+eng+hindi;
console.log("percentage of 5 subject::"+total/5);


//8 Converting Temperature Celsius into Fahrenheit
let celcius=10;
farenhit=(celcius*9/5)+32;
console.log("celcius to ferenhit::::"+farenhit);



//  9 The Display Size of the Different Datatype

// 10- Factorial of a Given Number
let no=5;
let ans=1;
for(let i=no;i >=1;i--)
{
   ans=ans*i;
}
console.log(ans);

// 11Read Integer (N) and Print the First Three Powers (N^1, N^2, N^3)

let no1=20;
console.log(no1**1);
console.log(no1**2);
console.log(no1**3);
console.log(Math.pow(2,1));
console.log(Math.pow(2,2));
console.log(Math.pow(2,3))

// 12 Area of a Circle
  let area=Math.PI*r*r;
  console.log('area of circle is:'+area);

  // 13 lcm


  // 14 gcd


  // 15 The Greatest Number Among the Given Three Number
let one=30,two=50,three=33;
if(one>=two)
{
    console.log(one);
}
else if(two>=three)
{
    console.log(two);
}
else if(three>=one);
{
    console.log(three);
}

// 16 negative or positive
number=-30;
if(number>=0)
{
    console.log("number is positive:"+number);
}
else
{
    console.log("number is nagetive :"+number);
}

// 17 - Character Is Vowel or Consonant
let char1="a";
if(char1=='a'&&'i'&&'o'&&'u'&&'e')
{
    console.log('character is vovle');
}
else
{ 
    console.log('character is constant');
}

// 18- A Character Is an Alphabet or Not
let alpa='a';
if(alpa>='a' && alpa <='z' || alpa >='A' && alpa <='Z')
{
    console.log('character is alphabet::'+alpa);
}
else
{
    console.log('character is not alpahabet::'+alpa);
}
// 19 numer  even or odd
let number3=20;
if(number3%2==0)
{
    console.log('number is even::'+number3);
}
else
{
    console.log('number is odd::'+number3)
}

// 20 leap year
var year=2013;

if(year % 4==0)
{
    console.log("year is leap year");
}
else{
    console.log("year is not a leap year");
}



// 21 date is correct or not
format="dd/mm/yyyy";
let date=08/09/2021;
if(date==format)
{
    console.log('date is correct');
}
else
{
    console.log('date is not correct');
}
// 22 voting 
let age=17;
if(age>=18)
{
    console.log('you are aligible for voting');
}
else{
    console.log('you are not aligible for voting');
}

// 23- Check whether a number is divisible by 5 and 11 or not.
let number4=55;
if(number4%5==0&&number4%11==0)
{
    console.log('number is divided by 5 and 11');
}
else
{
    console.log('number is not divided by 5 and 11');
}
// 24

let day1=7;
if(day1==1)
{
    console.log('monday');
}
else if(day1==2)
{
    console.log('tuesday');
}
else if(day1==3)
{
    console.log('wednesday');
}
else if(day1==4)
{
    console.log('thursday');
}
else if(day1==5)
{
    console.log('friday');
}
else if(day1==6)
{
    console.log('saturday');
}
else if(day1==7)
{
    console.log('sunday');
}
// 25
usernote=[100];
notes=[10,20,50,100,500,2000];
console.log(notes.length);
if(notes=usernote)
{
    console.log(usernote.length);
}
else
{
    console.log('not found');
}
//26 triangle or not
let a=30,c=30,b1=30; 

if(a==b1 && a==c)
{
    console.log('this is triagle');
}
else 
{
    console.log('this is not');
}
// 27
let x=10,y=12,z=14;
if(x==y==z)
{
    console.log('this triangle is equileteral');
}
else if(x==y,x==z,y==z)
{
    console.log('this triangle is isoscales ');
}
else if(x!=y,y!=z,z!=x)
{
    console.log('this is scelen');
}
// 28 

// 29
let may = 123456789;
let mstr = String(may);
let cter ="";
for(let i= mstr.length -1; i>= 0 ; i--){
    cter = cter + mstr.charAt(i)
}
console.log(cter);

// 30
let no5=153;
let r1,sum1=0,temp;    
temp=no5;    
while(temp > 0)    
{    
r1=temp%10;    
temp=parseInt(temp/10);
sum1=sum1+(r1**3);    
}    
if(no5==sum1)    
console.log("armstrong  number ");    
else    
console.log("not armstrong number");    




