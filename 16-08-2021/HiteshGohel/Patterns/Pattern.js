const pattern = (num) => {
  console.log('\n')
  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= 1; j--) {
      if (i >= j) {
        process.stdout.write('* ')
      } else {
        process.stdout.write(' ')
      }
    }
    console.log()
  }
  console.log('\n')
}

pattern(5)
