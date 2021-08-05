
    dataType(12, 4.32, "is the best place to learn and practice coding!")

function dataType(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4
    const firstDecimal = 4.0
    const firstString = "HackerRank "
  
return console.log(firstInteger+secondInteger,firstDecimal+secondDecimal,firstString+secondString)
  }
  


// class classname {
//     constructor(name,age){
//         this.name,(this.name = name);
//         this.age,(this.age = age);
//     }
//     display(){
//         console.log('this is object =>', this );
//     }
// }
// let obj1 = new classname('abc',20);
// let obj2 = new classname('def',21);
// let obj3 = new classname('ghi',22);
// {
//     console.log(obj1.display());
//     console.log(obj2.display());
//     console.log(obj3.display());
// }

// var obj = {
//     name : 'xyz',
//     surname : 'abc',
//     age : 22,
//     fullinfo:function() {
//         return this.name + '' +this.surname + ''+this.age;
//     }
// }
// console.log(obj.fullinfo());


// function primenum(a){
//     for(i=2;i<=a/2;i++){
//         if(a%i==0){
//             console.log('this is not prime number');
//             return false;
//         }
//        }return true;
//     }

// console.log(primenum(15));

// let armstrong = (x) => {
//     let temp = x;
//     let sum = 0;
//     while(temp != 0){
//         rem = temp % 10;
//         sum = sum + (rem ** (x.toString()).length);   
//         temp=parseInt(temp/10)
//         // temp = Math.floor(temp/10)
//     }
// return sum==x;
// }
// console.log(armstrong(153));

// function fibo(a){
//     if(a == 1){
//         return [0,1];
//     }else{
//         let arr = fibo(a-1);
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//         return arr;
//     }
// }
// console.log(fibo(8));

// let primenum = (a) => {
//     for(i=2; i<=a/2; i++){
//     if(a%i==0){
//         console.log('this is not a prime number');
//         return false;
//     }else{
//         console.log('this is a prime number');
//         return true;
//     }
// }
// }
// console.log(primenum(15));

// class test {
//     constructor(name,age){
//         this.name,(this.name = name);
//         this.age,(this.age = age);
//     }
//     display(){
//         console.log('this is a test class',this);
//     }
// }
// let test1 = new test('abc',52);
// let test2 = new test('xyz',15);
// {
//     console.log(test1.display(),test2.display());
// }

// obj = {
//     name:'xyz',
//     age:25,
//     date:21,
//     fullinfo:function() {
//         return this.name+this.age+this.date;
//     }
// }
// console.log(obj.fullinfo());

// let armstrongnum = function (a){
//         let temp = a;
//         sum = 0;
//         while (temp != 0){
//             rem = temp % 10;
//             sum=sum + (rem**(a.toString()).length);
//             temp=Math.floor(temp/10)
//         }
//         return sum==a;
// }
// console.log(armstrongnum(524));
