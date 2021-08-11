// 39. Sort A Float Array In Ascending And Descending Order Using

let myArr = [10.2, 15.5, 12.9, 13.5, 11, 56.1, 89.4, 95]
console.log(myArr.length)

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] > myArr[i + 1]) {
    let temp = myArr[i]
    myArr[i] = myArr[i + 1]
    myArr[i + 1] = temp
  }
}

console.log('Sorted Array :', myArr)
