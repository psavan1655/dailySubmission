const pattern = (n) => {
  for (let r = n; r >= 1; r--) {
    for (let s = n; s > r; s--) {
      process.stdout.write(" ");
    }
    for (let p = 1; p < r * 2; p++) {
      process.stdout.write("*");
    }
    console.log();
  }
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n - i; j++) {
  //       if (j >= i) {
  //         process.stdout.write("*");
  //       } else {
  //         process.stdout.write(" ");
  //       }
  //     }
  //     console.log("");
  //   }
};
pattern(15);
