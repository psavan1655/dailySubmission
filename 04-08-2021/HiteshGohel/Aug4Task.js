const firstInteger = 4
const firstDecimal = 4.0
const firstString = 'HackerRank'

function dataType (secondInteger, secondDecimal, secondString) {
  return `${firstInteger + parseInt(secondInteger)};\n${firstDecimal +
    parseFloat(secondDecimal)};\n${firstString + secondString}`
}

// function dataType (secondInteger, secondDecimal, secondString) {
//   const IntAddition = firstInteger + secondInteger
//   const FloatAddition = firstDecimal + secondDecimal
//   const StringConcatenation = firstString + secondString
//   return `${IntAddition};\n${FloatAddition};\n${StringConcatenation}`
// }

console.log(
  dataType(12, 4.32, 'is the best place to learn and practice coding!')
)
