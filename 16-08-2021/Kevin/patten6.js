let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    process.stdout.write(j.toString());
  }
  process.stdout.write("\n");
}
