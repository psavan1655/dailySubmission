let s1 = 4;
let s2 = 5;
let s3 =1;
if(s1 == s2 && s2 == s3)
{
    console.log("Tringle is Equilator Tringle");
} 
else if(s1 == s2 || s2 == s3 || s3 == s1)
{
    console.log("Tringle is Isolated Tringle");

}
else{
    console.log("Tringle is Scalene Tringle");
}