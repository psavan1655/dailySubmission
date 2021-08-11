let add = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
let mul = (a, b) => {
  return a * b;
};
let div = (a,b) => {
  return a / b;
};
let choice = 3;
switch (choice) {
  case 1:
    let add_ans = add(12, 23);
    console.log(add_ans);
    break;
  case 2:
    let sub_ans = sub(23, 10);
    console.log(sub_ans);
    break;
  case 3:
    let mul_ans = mul(12, 12);
    console.log(mul_ans);
    break;
  case 4:
    let div_ans = div(12, 6);
    console.log(div_ans);
    break;

  default:
    break;
}
