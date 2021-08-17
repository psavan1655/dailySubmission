let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (j >= i && j <= 2 * n - i) {
      process.stdout.write(j + " ");
    } else {
      process.stdout.write("  ");
    }
    }
  console.log();
}

