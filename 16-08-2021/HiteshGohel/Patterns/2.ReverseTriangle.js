const reverseTriangle = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let col = num; col >= i; col--) {
      process.stdout.write('+ ')
    }
    console.log()
  }
}

reverseTriangle(5)
