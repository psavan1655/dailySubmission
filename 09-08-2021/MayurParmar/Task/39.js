// Sort A Float Array In Ascending And Descending Order Using

let arr = [23.434, 23.01, 2, 5, 3234, 32432, 343];
console.log("Ascending : "); //Printing message

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
for (
  let i = 0;
  i < arr.length;
  i++ //Loop for printing array data after sorting
) {
  console.log(arr[i]);
}

console.log("Descending  : "); //Printing message

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
for (
  let i = 0;
  i < arr.length;
  i++ //Loop for printing array data after sorting
) {
  console.log(arr[i]);
}
