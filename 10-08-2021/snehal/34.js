let no = 11211;

let str = String(no);
let a = "";

let i=str.length -1;
while(i>=0){
    a = a + str.charAt(i)
    i--
}
if(a == no){
    console.log("this is palimdrom");
}else{
    console.log("not palimdrom");
}