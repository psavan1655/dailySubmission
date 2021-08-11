let arraynew = [1, 2, 3, 4];
function arrayRead(arr) {
  console.log(arrayRead(arr));
}

arrayRead(arraynew);

function arr(number, power) {
  if (power == 1) {
    return number;
  } else {
    return number * arr(number, power - 1);
  }
}

console.log(arr(2, 3));

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

console.log(arr1);
console.log(arr2);

[arr1, arr2] = [arr2, arr1];

console.log(arr1);
console.log(arr2);

a = "mayur";
b = 12;
c = 1;
console.log(a + " " + b + " " + c);

[a, b, c] = [b, c, a];
console.log(a + " " + b + " " + c);
