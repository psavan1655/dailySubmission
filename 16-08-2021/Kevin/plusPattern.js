const plusPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == Math.ceil(num / 2) || j == Math.ceil(num / 2)) {
        process.stdout.write("+ ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
};

plusPattern(5);
