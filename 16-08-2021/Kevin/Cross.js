const Cross = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if ( i + j == num + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
};

Cross(11);
