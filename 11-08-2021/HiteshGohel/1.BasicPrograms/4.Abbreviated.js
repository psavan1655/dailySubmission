console.log('Convert a Person’s Name in Abbreviated')
let stringData = prompt('Enter String :')
console.log('You Entered :', stringData)
let newString = stringData.split(' ')
let result = ''
console.log('NewString Data is :', newString)
for (var dataS of newString) {
  result = result + dataS.charAt(0)
}
console.log('You Entered String is :', stringData)
alert('Abbreviated String is :' + result.toLocaleUpperCase())
