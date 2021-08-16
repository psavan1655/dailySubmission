console.log('------- Simple Interest --------')
let P_amount = prompt('Enter Amount :', 4500)
let R_rate = prompt('Enter Interest Percent :', 9.5)
let T_time = prompt('Enter of Years of Duration :', 6)

let simpleInterest = (P_amount * R_rate * T_time) / 100
alert('Simple Interest is :' + simpleInterest + 'Rs.')
