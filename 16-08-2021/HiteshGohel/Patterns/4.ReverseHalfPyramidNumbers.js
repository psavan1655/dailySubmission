const ReverseHalfPyramidNumbers = (num) => {
  console.log('\n Reverse Half Pyramid of Numbers :')
  for (let i = 1; i <= num; i++) {
    for (let col = num; col >= i; col--) {
      process.stdout.write(' ' + col)
    }
    console.log()
  }
  console.log('\n')
}

ReverseHalfPyramidNumbers(5)

// output :
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

//  ---------------------------------------------------------------

const ReverseHalfPyramidNumbers2 = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let col = i; col <= num; col++) {
      process.stdout.write(' ' + col)
    }
    console.log()
  }
}

ReverseHalfPyramidNumbers2(5)
// output :
// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5
