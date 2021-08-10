console.log('------- Simple Interest --------')
let amount = prompt('Enter Amount :', 4500)
let rate = prompt('Enter Interest Percent :', 9.5)
let time = prompt('Enter of Years of Duration :', 6)

let simpleInterest = (amount * rate * time) / 100
alert('Simple Interest is :' + simpleInterest + 'Rs.')
