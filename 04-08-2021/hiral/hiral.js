console.log("hey");
// let a  = 'Hello world!';
// let b;
// a= b ;
// console.log(a);
// console.log(b);

let admin , name;
name = "qwer"
admin = "hiral";

admin=name ;
console.log(name);
let i= 4 > 1;
console.log(i);

process.stdout.write("hello: ");

// var  age = prompt('How old are you?', 100);

// console.log('You are ${age} years old!');
let a =""
console.log(typeof a);
let b="asd"
console.log(typeof b);
let c= 12
console.log(typeof c);
let d ="  "
console.log(typeof d);
function dataType(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstSring = "HackerRank ";
  
  // function che have ene call karvano ene pn js ma return kemni lakhvi 
    return `${firstInteger+secondInteger};\n${firstDecimal+secondDecimal};\n${secondString+firstSring }`
    // Return your output here.
  }
  
  // It should display the expected output.
  console.log(
    dataType(12, 4.32, "is the best place to learn and practice coding!")
  );

  let y = 4;
  y= -y;
  console.log( y);

  console.log( 6 - '3'*6 );
console.log( '6' / '2' );
 
console.log("helo");
let counter = 1;
console.log( 2 * counter );
++counter;

let zx = (1 + 2, 3 + 4,3+3-10);

console.log( zx ); 

let ab = 0;
console.log( Boolean(ab) ); // false

let bx = "0";
console.log( Boolean(bx) ); // true

console.log(ab == bx);
let qw,we=1;
let result = (qw +we < 4) ? console.log("right") :console.log("right");


let iq = 0;
while (iq < 3){
  console.log( iq );
  iq++;
}
console.log("asdf");
let iqe = 3;
while (iqe){
  console.log( iqe );
  iqe--;
}
// console.log("fghj");
// let z = 0

// if (z < 3) {console.log(z); i++ }

// if (z < 3) {console.log(z); i-- }

// if (z < 3) {console.log(z); i++ }

let ia= 0;

for (ia = 0; ia < 3; ia++) {
  console.log(ia); 
}

console.log(ia)

let ag = 2 + 2;

switch (ag) {
  case 3:
   console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}


console.log(v);
var  v="hiral1";

// console.log(poi);
// let poi="hiral";

// console.log(po);
// const po="hiral";

let firstName = "he";
let lastName = null;
let nickName = "Supercoder";


console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); 


let height = null;

console.log(height || 100); // 0 hoy to 100 ,,,10 hase to 10 aapse,,,,,,,null hoy to 100 
console.log(height ?? 100); // 0 hoy to 0   ,,,10 hot to 10 aape  ,,,,,,,null hoy to 100
console.log(height && 100);// 0 hoy to 0    ,,,

function showMessage1() {
  console.log( 'Hello everyone!' );
}

showMessage1();


// let userName2 = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName2;
//   console.log(message);
// }

// showMessage(); 
// console.log(message);
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage();

// console.log( message );

// let userNa = 'kjhgfds';

// function showMessage() {
//   let m = userNa;
//   console.log(m);
// }

// showMessage();

let u = 'John';
function showMessage()

 {
 
  let message1 ="hello     "  + u; 
  console.log(message1);
}

showMessage();
// console.log(message1);
// -09876543234567890-0987654321
let l = "hiral";

function test() {
  l = "hir"; // (1) changed the outer variable

  let message2 = 'Hello, ' + l;
console.log(message2);//hello hir



console.log("ytre");
}
console.log( l );//hiral
console.log("ytre");
test();

console.log( l );//hir
function abc(from, text) { 
 console.log(from + ': ' + text);
}

abc('Ann', 'Hello!'); 
abc('Ann', "What's up?");

let double = n => n * 2;


console.log( double(3) );
let user = {
  name: "John",
  age: 30
};

let key ="name";
console.log( user[key] )
let az = {};
let bz = az; 

console.log( az == bz ); 
console.log( az=== bz );

let pm=0,pq=0;
pm=++pm;
pq=++pm;
console.log(pm,pq);
