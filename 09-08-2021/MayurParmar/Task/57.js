//  Put even and odd elements of an array in two separate arrays.

let arr = [1, 2, 4, 5, 6, 7];
let even = [];
let odd = [];
for (data of arr) {
  if (data == 1) {
    odd.push(data);
  } else if (data % 2 == 0) {
    even.push(data);
  } else {
    odd.push(data);
  }
}
console.log("Even Array : ");
console.log(even);
console.log("Odd Array :  ");
console.log(odd);
