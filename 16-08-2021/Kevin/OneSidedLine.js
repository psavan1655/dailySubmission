const oneSidedLine = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == j) {
        process.stdout.write("+ ");
      } else {
        process.stdout.write("o ");
      }
    }
    console.log();
  }
};

oneSidedLine(5);
