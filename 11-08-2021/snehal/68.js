// 68
str="snehal parmar";
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// 69 stirng palinrum or not;

let no="aasa";
let str5 = String(no);
let a = "";
let i=str5.length -1;
while(i>=0){
    a = a + str5.charAt(i)
    i--
}
if(a == no){
    console.log("this is palimdrom");
}else{
    console.log("not palimdrom");
}


// 71
console.log(str.length);

// 72
str2="hello !!";
console.log(str.concat(" "+ str2));

// 73
console.log(str.localeCompare(str2));

// 74
str3="$snehal12!parmar";
cou=0,cn=0,nc=0;
for(i=0;i<str.length;i++)
{
    if(str3.charAt(i)>='a' && str3.charAt(i) <='z' || str3.charAt(i) >='A' && str3.charAt(i) <='Z')
    {
        cou++;
    }
    else if(str3.charAt(i)>='0' && str3.charAt(i)<='9')
    {
        cn++;
    }
    else if(str3.charAt(i)=='+' && str3.charAt(i)=='!' && str3.charAt(i)=='$')
    {
        nc++;
    }
}
console.log('total number of alphabet::'+cou);
console.log('total number of digit::'+cn);
console.log('total number of special char::'+nc);

// 75
console.log(str.charAt(0));
// 76
console.log(str.charAt(str.length-1));

// 77

strign="snehal parmar";
strin="snehal";
s1=strign.length;
s2=strin.length;
if(s1==s2)
{
    console.log('both are same');
}
else if(s1>=s2)
{
    console.log('highes frequency is::'+s1+" "+strign);
}
else if(s2>=s1)
{
    console.log('highest frequency is:: '+s2+" "+strin);
}

// 78
console.log(str.slice(0,str.length-1));
// 79
str3=""
console.log("..."+str3.replace(str));

//80
// console.log(80); 
// function removeDuplicateCharacters(string) {
//   return string
//     .split('')
//     .filter(function(item, pos, self) {
//       return self.indexOf(item) == pos;
//     })
//     .join('');
// }
// console.log(removeDuplicateCharacters('baraban'));


// 81
console.log(str.replace('s',str2));