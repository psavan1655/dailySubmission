// @ts-nocheck
const revPyramid = (row) => {
  const col = 9
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j >= i && j < col - i) {
        process.stdout.write('o ')
      } else {
        process.stdout.write('  ')
      }
    }
    console.log()
  }
}

revPyramid(5)
