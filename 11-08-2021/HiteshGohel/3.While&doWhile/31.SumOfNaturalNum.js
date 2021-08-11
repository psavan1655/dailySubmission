// 31- Calculate Sum of Natural Numbers

const checkSumOfNaturalNum = (num) => {
  let originalNum = num
  let sum = 0
  while (originalNum !== 0) {
    sum = sum + originalNum
    originalNum--
  }
  console.log(`Sum of ${num} natural Numbers is : ${sum}`)
}

checkSumOfNaturalNum(10)
