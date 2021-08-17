const BlankSquare = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == num || j == num || i == 1 || j ==  1 ) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
};

BlankSquare(10);
