let no=4525;
let temp;
temp = no;
let rem;
let reverse = 0;
while(no > 0){
    rem = no%10;
    reverse = reverse*10 + rem;
    no = Math.floor(no/10);
    
}
if(reverse == temp)
{
    console.log("Number is Pelindrom");
}
else
{
    console.log("Number is not Pelindrom");
}