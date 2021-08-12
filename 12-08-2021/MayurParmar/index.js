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
// Example1();

function Example1NEW() {
  let N = 4;
  let M = 5;
  let arr1 = new Array(N);
  let arr2 = new Array(M);
  arr1 = [1, 3, 5, 7];
  arr2 = [0, 2, 6, 8, 9];
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = i; j <= i; j++) {
  //       if (arr1[i] < arr2[j]) {
  //         console.log(arr1[i]);
  //         console.log(arr2[j]);
  //       } else {
  //         console.log(arr2[j]);
  //         console.log(arr1[i]);
  //       }
  //     }
  //   }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (arr1[i] < arr2[j]) {
        process.stdout.write(String(arr1[i]) + " ");
        process.stdout.write(String(arr2[j]) + " ");
      } else {
        process.stdout.write(String(arr2[j]) + " ");
        process.stdout.write(String(arr1[i]) + " ");
      }
    }
  }
  console.log(String(arr2[arr2.length - 1]));
}
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

// function Example2() {
//   let N = 4;
//   let M = 5;
//   let arr1 = new Array(N);
//   let arr2 = new Array(M);
//   arr1 = [10, 12];
//   arr2 = [5, 18, 20];
//   for (data of arr1) {
//     arr2.push(data);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[i] < arr2[j]) {
//         let tem = arr2[i];
//         arr2[i] = arr2[j];
//         arr2[j] = tem;
//       }
//     }
//   }
//   console.log("Example 2 : ");
//   console.log(arr2);
// }

// function Example1NEW() {
//   let N = 4;
//   let M = 5;
//   let arr1 = new Array(N);
//   let arr2 = new Array(M);
//   arr1 = [1, 3, 5, 7];
//   arr2 = [0, 2, 6, 8, 9];
//   arr1 = arr1.sort();
//   arr2 = arr2.sort();

//   //   for (let i = 0; i < arr1.length; i++) {
//   //     for (let j = i; j <= i; j++) {
//   //       if (arr1[i] < arr2[j]) {
//   //         console.log(arr1[i]);
//   //         console.log(arr2[j]);
//   //       } else {
//   //         console.log(arr2[j]);
//   //         console.log(arr1[i]);
//   //       }
//   //     }
//   //   }

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i; j <= i; j++) {
//       if (arr1[i] < arr2[j]) {
//         process.stdout.write(String(arr1[i]) + " ");
//         process.stdout.write(String(arr2[j]) + " ");
//       } else {
//         process.stdout.write(String(arr2[j]) + " ");
//         process.stdout.write(String(arr1[i]) + " ");
//       }
//     }
//   }
//   console.log(String(arr2[arr2.length - 1]));
// }
// Example1NEW();

// Example2();
// Your Task:
// You don't need to read input or print anything. Complete the function merge() which takes the two arrays arr1[], arr2[] and their sizes n and m, as input parameters. The function does not return anything. Use the given arrays to sort and merge arr1[] and arr2[] in-place.
// Note: The generated output will print all the elements of arr1[] followed by all the elements of arr2[].

// Expected Time Complexity: O((n+m)*log(n+m))
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N, M <= 5*104
// 0 <= arr1i, arr2i <= 106
