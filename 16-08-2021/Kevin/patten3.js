let n = 6;
for (let i = 0; i <= n; i++){
  for (let j = 0; j <= 2*n; j++){
    if ((i+j == n) || (j - i == n) || (i == n && j % 2 == 0)) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    } `1!~`
    process.stdout.write(" ");
  }
  console.log();
}
