// Remove Duplicates Items In An Array
let arr = [1, 2, 4, 2, 3221, 21, 21, 21, 2, 2, 13, 1, 434, 434, 1, 32, 2];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1);
    }
  }
}

console.log(arr);
