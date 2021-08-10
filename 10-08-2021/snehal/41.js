// 41 grade

marks=90;
switch(marks)
{
    case  marks=40:
       
        console.log('grade is E');
        break;
    case  marks=50:
        console.log('grade is D');
        break;
    case marks=60:
        console.log('grade is c ')
        break;
    case marks=70:
        console.log('grade is B-');
        break;
    case marks=80:
        console.log('grade is A');
        break;
    case marks=90:
        console.log('grade is distict');
        break;
    default:
        console.log('enter valild marks');   
}

// 42 
var area=20,h=30,r=10;
var cyl=3;
switch(cyl)
{
    case 1 :'volum'
        console.log(cyl=area*h);
         console.log(cyl=Math.PI*(r*r)*h);
        break;
    case 2 :'radious'
        console.log(cyl=Math.sqrt((Math.PI*(r*r)*h)/(Math.PI * h)));
        break;  
    case 3:'circumference'
        var ac=Math.sqrt((Math.PI*(r*r)*h)/(Math.PI * h))
        console.log(cyl=ac*2*Math.PI);
        break;
    default:
        console.log('plz enter fix value');
}

// 43
vovel=1;
let strr="snehal parmar"
switch(vovel)
{

    case 1:
        console.log(strr.replace('a',' '));
        break;
    case 2:
        console.log(strr.replace('i',' '));
        break;
    case 3:
        console.log(strr.replace('e'," "));
        break;
    case 4:
        console.log(strr.replace('o',' '));
        break;
    case 5:
        console.log(strr.replace('u',' '));
        break;
    default:
        console.log(strr);    
}

// 44
arr=['aa','bb','bb','cc'];
console.log(arr.splice(2,0,'snehal'));
console.log(arr);
// 45

console.log(arr)

// 46
console.log(arr.splice(0,1));
console.log(arr);

// 47
let str="i am developer";
console.log(str.split(" "));


