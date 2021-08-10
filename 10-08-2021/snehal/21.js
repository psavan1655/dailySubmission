// 31 prg
let no=5 ,sum=0;
for(var i=0;i<=no;i++)
{
    sum=sum+i;
}
console.log(sum);


// 32 fibonancy series

let n1=0,n2=1,n3,count=10;    
 console.log(" "+n1);
 console.log(" "+n2);    
 for(i=2;i<count;i++) 
 {    
  n3=n1+n2;    
  console.log(" "+n3);    
  n1=n2;    
  n2=n3;    
 }    

// 35

 let no1=1234455;
 let strn=String(no1);
 console.log(strn.length);


// 37 ip addrress




// 38
let table=8,no3=10;
for(i=1;i<=no3;i++)
{
console.log(table +"*"+i+"=" +table*i );
}
// 39
let arr=[1,5,7,9,2,5,7,9,4];
console.log(arr.sort());
console.log(arr.reverse());

// 40
var a=10,b=20;
var c=5;
switch(c){
    case 1:'plus'
        console.log(c=a+b);
        break;
    case 2:'minus'
        console.log(c=a-b);
        break;
    case 3:'mul'
        console.log(c=a*b);
        break;
    case 4:'div'
        console.log(c=a/b);
        break;
    case 5:'modul'
        console.log(c=a%b);
        break;
    default:
        console.log("enter valid arg");
}




