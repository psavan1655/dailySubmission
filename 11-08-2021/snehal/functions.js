// 82- Find diameter, circumference and area of a circle using functions.

function Area()
{
    let r=10;
    console.log('area of circle is::'+Math.PI*r*r);
    console.log('diameter ::'+2*r);
    console.log('cercumference::'+2*Math.PI*r);
}
console.log(Area());

// 83 prime or not

 function prime()
 {
     n=5;
     let flag=0,m=0;
     m=n/2;
     if(n==0||n==1)
     {
        console.log('no is not prime:');
     }
     else
     {
         for(i=2;i<=m;i++)
         {
             if(n%i==0)
             {
                 console.log('no is  not prime');
                flag=1;
                break;
            }
        }
       if(flag==0)
       {
           console.log("no is prime")
       }
 
    }
 }
function armstrong()
{
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
}
console.log(prime());
console.log(armstrong());


// 85
let number = 6;
function factorial(number) {
  let tem = 1;
  for (let i = 1; i <= number; i++) {
    tem = tem * i;
  }
  console.log(tem);
}
factorial(number);

// 84
let no=5 ,sum=0;
function natural(no)
{
for(var i=0;i<=no;i++)
{
    sum=sum+i;
}
console.log(sum);
}
natural(no);

// 86

let n1=0,n2=1,n3,count=17;    
function fibo()
{
console.log(" "+n1);
 console.log(" "+n2);    
 for(i=2;i<count;i++) 
 {    
  n3=n1+n2;    
  console.log(" "+n3);    
  n1=n2;    
  n2=n3;    
 }    
}
fibo()



