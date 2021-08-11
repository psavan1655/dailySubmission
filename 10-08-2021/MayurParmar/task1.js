// Example 1:
(K = 3), (N = 4);
Arr = [3, 9, 12, 16, 20];
for (let i = 0; i < Arr.length; i++) {
  if (i == 0) {
    Arr[i] = Arr[i] + K;
  } else if (i == 1) {
    Arr[i] = Arr[i] - K;
  } else if (i % 2 == 0) {
    Arr[i] = Arr[i] + K;
  } else {
    Arr[i] = Arr[i] - K;
  }
}
console.log(Arr);
let d = Math.max(...Arr) - Math.min(...Arr);
console.log(
  "the largest and the smallest is " +
    Math.max(...Arr) +
    " + " +
    Math.min(...Arr) +
    " = " +
    d
);
