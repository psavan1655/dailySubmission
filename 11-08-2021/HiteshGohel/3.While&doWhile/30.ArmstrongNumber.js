// 30- Find Number Is Armstrong Or Not

const ArmstrongNum = (num) => {
  let sum = 0
  let temp = num

  while (temp > 0) {
    const rem = temp % 10
    sum = sum + rem * rem * rem
    temp = Math.floor(temp / 10)
  }

  if (num === sum) {
    console.log(`${num} is Armstrong Number`)
  } else {
    console.log(`${num} is Not an Armstrong Number`)
  }
}
ArmstrongNum(151)
