// Create a Simple Calculator using switch case
let a = 20;
let b = 5;
let op = "subs";
switch (op) {
  case "add": {
    console.log("Addtion of two value : " + (a + b));
    break;
  }
  case "div": {
    console.log("Divition of two value : " + a / b);
    break;
  }
  case "mul": {
    console.log("Multiplition of two value : " + a * b);
    break;
  }
  case "sub": {
    console.log("Subtraction of two value : " + (a - b));
    break;
  }
  default:
    console.log("Plz Choose Add, mul , divition , sub");
}
