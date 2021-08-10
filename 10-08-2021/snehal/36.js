// 36
let no = 123;

let str = String(no);
let i = 0;
let sum =0;

while(i< str.length){
    sum = Number(sum) + Number(str.charAt(i));
    i++;
}

let j =0 ;
let str2 = String(sum)
let sum2 = 0;
while(j< str2.length)
{
    sum2 = sum2 + Number(str2.charAt(j));
    j++
}0

console.log("Generic root number is " + no + " is " + sum2);