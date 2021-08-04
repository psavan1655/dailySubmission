let firstInteger = 4;
let firstDecimal = 4.0;
let firstString = "HackerRank";

let secondInteger = "12";
let secondDecimal = "4.32";
let secondString =
  " is the best place to learn and practice coding! , we get HackerRank is the best place to learn and practice coding! .";

console.log(firstInteger + parseInt(secondInteger));
console.log(firstDecimal + parseFloat(secondDecimal));
console.log(firstString + secondString);

console.log("\n");

//  boiler plate
function dataType(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  return `${firstInteger + parseInt(secondInteger)}, \n${
    firstDecimal + parseFloat(secondDecimal)
  },\n${firstString + secondString} `;
}

// It should display the expected output.
console.log(
  dataType(12, 4.32, "is the best place to learn and practice coding!")
);
