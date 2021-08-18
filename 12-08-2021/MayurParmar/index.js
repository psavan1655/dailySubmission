// Mayur Parmar -
// Given two sorted arrays arr1[] of size N and arr2[] of size M.
//Each array is sorted in non-decreasing order. Merge the two arrays into one sorted array in non-decreasing order without using any extra space.

// Example 1:

// Input:
// N = 4, M = 5
// arr1[] = {1, 3, 5, 7}
// arr2[] = {0, 2, 6, 8, 9}
// Output: 0 1 2 3 5 6 7 8 9
// Explanation: Since you can't use any
// extra space, modify the given arrays
// to form
// arr1[] = {0, 1, 2, 3}
// arr2[] = {5, 6, 7, 8, 9}

function Example1() {
  console.log("====================================================");
  console.log("This is Example 1");
  let N = 4;
  let M = 5;
  let arr1 = new Array(N);
  let arr2 = new Array(M);
  arr1 = [1, 3, 5, 7];
  arr2 = [0, 2, 6, 8, 9];
  for (data of arr1) {
    arr2.push(data);
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[i] < arr2[j]) {
        let tem = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = tem;
      }
    }
  }
  console.log("Example 1 : ");
  console.log(arr2);
}
Example1();

function Example1NEW() {
  let N = 4;
  let M = 5;
  let arr1 = new Array(N);
  let arr2 = new Array(M);
  arr1 = [1, 3, 5, 7];
  arr2 = [0, 2, 6, 8, 9];
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  let i = arr1.length - 1;
  let j = 0;
  while (arr1[i] > arr2[j]) {
    arr1[i] = arr1[i] + arr2[j];
    arr2[j] = arr1[i] - arr2[j];
    arr1[i] = arr1[i] - arr2[j];
    i--;
    j++;
  }
  arr1.sort();
  arr2.sort();

  let str = "";
  for (i = 0; i < arr1.length; i++) {
    str = str + arr1[i];
    str = str + " ";
  }
  for (i = 0; i < arr2.length; i++) {
    str = str + arr2[i];
    str = str + " ";
  }
  console.log(str);
  console.log("arr1 : " + arr1);
  console.log("arr2 : " + arr2);
  console.log("====================================================");
}
console.log("**********************");
console.log("OR");
console.log("**********************");
Example1NEW();

// for(let i=0;i<5;i++){
//     for(let j=0; j<=10;j++)
// }

// Example 2:

// Input:
// N = 2, M = 3
// arr1[] = {10, 12}
// arr2[] = {5, 18, 20}
// Output: 5 10 12 18 20
// Explanation: Since you can't use any
// extra space, modify the given arrays
// to form
// arr1[] = {5, 10}
// arr2[] = {12, 18, 20}

function Example2() {
  console.log("====================================================");
  let N = 4;
  let M = 5;
  let arr1 = new Array(N);
  let arr2 = new Array(M);
  arr1 = [10, 12];
  arr2 = [5, 18, 20];
  for (data of arr1) {
    arr2.push(data);
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[i] < arr2[j]) {
        let tem = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = tem;
      }
    }
  }
  console.log("Example 2 : ");
  console.log(arr2);
}

Example2();
console.log("**********************");
console.log("OR");
console.log("**********************");

function ExampleNew2() {
  let N = 2,
    M = 3;
  let arr1 = new Array(N);
  let arr2 = new Array(M);
  arr1 = [10, 12];
  arr2 = [5, 18, 20];
  let i = arr1.length - 1;
  let j = 0;
  while (arr1[i] > arr2[j]) {
    arr1[i] = arr1[i] + arr2[j];
    arr2[j] = arr1[i] - arr2[j];
    arr1[i] = arr1[i] - arr2[j];
    i--;
    j++;
  }

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1.length; j++) {
      if (arr1[i] < arr1[j]) {
        arr1[i] = arr1[i] + arr1[j];
        arr1[j] = arr1[i] - arr1[j];
        arr1[i] = arr1[i] - arr1[j];
      }
    }
  }

  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2[i] < arr2[j]) {
        arr2[i] = arr2[i] + arr2[j];
        arr2[j] = arr2[i] - arr2[j];
        arr2[i] = arr2[i] - arr2[j];
      }
    }
  }
  let str = "";
  for (i = 0; i < arr1.length; i++) {
    str = str + arr1[i];
    str = str + " ";
  }
  for (i = 0; i < arr2.length; i++) {
    str = str + arr2[i];
    str = str + " ";
  }
  console.log(str);
  console.log("arr1 : " + arr1);
  console.log("arr2 : " + arr2);
  console.log("====================================================");
}
ExampleNew2();

// Example2();
// Your Task:
// You don't need to read input or print anything.
// Complete the function merge() which takes the two arrays arr1[], arr2[] and
// their sizes n and m, as input parameters. The function does not return anything.
// Use the given arrays to sort and merge arr1[] and arr2[] in-place.
// Note: The generated output will print all the elements of arr1[] followed by all the elements of arr2[].

// Expected Time Complexity: O((n+m)*log(n+m))
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N, M <= 5*104
// 0 <= arr1i, arr2i <= 106

function Example3() {
  let arr1 = [1, 34, 54];
  let arr2 = [36, 63, 3];
  console.log(arr1);
  console.log(arr2);
  arr1.sort();
  arr2.sort();
  let i = 0;
  let j = 0;
  let str = "";
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      str = str + arr1[i];
      str = str + " ";
      str = str + arr2[j];
      str = str + " ";
    } else {
      str = str + arr1[j];
      str = str + " ";
      str = str + arr2[i];
      str = str + " ";
    }
    i++;
    j++;
  }
  console.log(str);
  console.log("=======================================================");
}
console.log("=======================================================");
Example3();
