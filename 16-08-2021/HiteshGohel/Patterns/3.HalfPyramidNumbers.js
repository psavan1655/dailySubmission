const halfPyramidNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let col = 1; col <= i; col++) {
      process.stdout.write(col + '  ')
    }
    console.log()
  }
  console.log('\n')
}

halfPyramidNumbers(5)

// -------------------------------------------------------

const halfPyramidNumbers2 = (num) => {
  for (let i = num; i >= 1; i--) {
    for (let col = num; col >= i; col--) {
      process.stdout.write(col + '  ')
    }
    console.log()
  }
}

halfPyramidNumbers2(5)
