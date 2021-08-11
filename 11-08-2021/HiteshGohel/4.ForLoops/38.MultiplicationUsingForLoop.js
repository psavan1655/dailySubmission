// 38- Print Multiplication Table Using

const Multi = (num) => {
  let ans = 0
  for (var i = 1; i <= 10; i++) {
    ans = num * i
    console.log(`${num} * ${i} = ${ans}`)
  }
}
Multi(5)
