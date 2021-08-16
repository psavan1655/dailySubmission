const Pyramid = (num) => {
  console.log('\n')
  for (let i = 1; i <= num; i++) {
    for (let s = 1; s <= num - i; s++) {
      process.stdout.write('  ')
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      process.stdout.write('o ')
    }
    console.log()
  }
  console.log('\n')
}

Pyramid(5)
