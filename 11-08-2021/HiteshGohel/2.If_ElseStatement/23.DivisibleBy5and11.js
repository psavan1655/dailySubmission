// 23- Check whether a number is divisible by 5 and 11 or not.

const checkNumber = (num) => {
  if (num % 5 == 0 && num % 11 == 0) {
    console.log(`The ${num} is Divisible by 5 and 11`)
  } else {
    console.log(`The ${num} is not Divisible by 5 and 11`)
  }
}

checkNumber(155)
