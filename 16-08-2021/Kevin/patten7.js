let n = 4;
for (let i = 0; i <= n; i++){
  for (let j = 0; j <= n; j++){
    if ((i + j == 2) || (i - j ==2) || (j - i == 2) || (i == 3 && j == 3)) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
    process.stdout.write(" ");
  }
  console.log();
}