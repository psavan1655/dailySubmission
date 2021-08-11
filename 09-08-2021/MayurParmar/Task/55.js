// Merge two arrays to the third array. (Also try to put all numbers in ascending order)

let arr1 = [54, 32, 43];
let arr2 = [1, 2, 3];
let arr3 = arr1.concat(arr2);
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[i] < arr3[j]) {
      let tem = arr3[i];
      arr3[i] = arr3[j];
      arr3[j] = tem;
    }
  }
}
console.log(arr3);
