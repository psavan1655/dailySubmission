const number = 10;
let n1 = 0, n2 = 1, sum;

console.log('Fibonacci Series:');
console.log(n1);
console.log(n2);

sum = n1 + n2;

while (sum <= number) {
    console.log(sum);

    n1 = n2;
    n2 = sum;
    sum = n1 + n2;
}