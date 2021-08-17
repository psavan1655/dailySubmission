let arr = [1, 0, 1, 1, 1, 1, 8, 9, 2, 6, 7, 6, 8, 9];

let a = arr.length - 1;
let jum = 2;
let k = 1;
for (i = k; i <= k + arr[k]; i++) {
  if (arr[i] == 0) {
    jum = 0;
    break;
  }
  if (i + arr[i] > a) {
    jum = jum + 1;
    break;
  }
  if (i == k + arr[1]) {
    jum = jum + 1;
    k = k + arr[i];
  }
}
console.log(jum);
// let r = 0;
// for (i = 1; i < arr.length; i++) {
//   if (r < i) {
//     return console.log(false);
//   }
//   r = Math.max(r, i + arr[i]);
// }
// return console.log(true);
