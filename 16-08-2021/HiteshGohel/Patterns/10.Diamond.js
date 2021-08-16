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
}

Pyramid(5)

// @ts-nocheck
const reversePyramid = (row) => {
  const col = 9
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j >= i && j < col - i) {
        process.stdout.write('o ')
      } else {
        process.stdout.write('  ')
      }
    }
    console.log()
  }
  console.log('\n')
}

reversePyramid(5)
