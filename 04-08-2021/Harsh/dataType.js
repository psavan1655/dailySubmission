function dataType(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4
  const firstDecimal = 4.0
  const firstString = "HackerRank "

//   // Return your output here.

return `${firstInteger + secondInteger};\n${firstDecimal +
    secondDecimal};\n${firstString + secondString}`
}
console.log(
    dataType(12, 4.32, "is the best place to learn and practice coding!")
  )
// It should display the expected output.




function dataTypes() {
    const firstString = "HackerRank ";
    return function sum(secondString) {
        return (firstString + secondString)
    }
}
console.log(dataTypes()("is the best place to learn and practice coding!"))

function dataTypesss() {
    const firstDecimal = 4.0;
    return function sum(secondDecimal) {
        return (firstDecimal + secondDecimal)
    }
}
console.log(dataTypesss()(4.32))

function datatypess() {
    const firstInteger = 4;
    return function sum(secondInteger) {
        return (firstInteger + secondInteger)
    }
}
console.log(datatypess()(12));

function dataType1(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4
    const firstDecimal = 4.0
    const firstString = "HackerRank "
  
    // Return your output here.
  
  return console.log(firstInteger+secondInteger,firstDecimal+secondDecimal,firstString+secondString)
  }

    dataType1(12,4.32,"is the best place to learn and practice coding!")

console.log(4+12);
console.log(4.0+4.32);
console.log("HackerRank"+"is the best place to learn and practice coding!");