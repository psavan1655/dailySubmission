// const Pyramid = (num) => {
//   console.log('\n')
//   for (let i = 1; i <= num; i++) {
//     for (let s = 1; s <= num - i; s++) {
//       process.stdout.write('  ')
//     }
//     for (let j = 1; j <= i * 2 - 1; j++) {
//       process.stdout.write('o ')
//     }
//     console.log()
//   }
//   console.log('\n')
// }

// Pyramid(5)

const Pyramid = (num) => {
  console.log('\n')
  let col = 9
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= col; j++) {
      if (j <= Math.floor(col / 2) && j >= Math.ceil(col / 2 + 1)) {
        process.stdout.write('_')
      } else {
        process.stdout.write('o')
      }
    }
    console.log()
  }
  console.log('\n')
}

Pyramid(5)
