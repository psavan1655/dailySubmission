//  Copy all elements from an array to another array.
let arr1 = [1, 2, 3, 4];
let arr = [];

// solution 1
arr.push(...arr1);
console.log(arr);

// solution 2
let tem = [];
tem = arr1;
console.log(tem);

// solution 4
let arr4 = arr3.concat(arr1);
console.log(arr4);

// solution 3
// console.log(arr1.length);
// for (let i = 0; i < arr1.length; i++) {
//   arr.push(arr1[i]);
// }
