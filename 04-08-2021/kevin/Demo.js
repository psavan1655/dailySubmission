function dataType(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

    
  // Return your output here.
  return (
    firstString +
    secondString +
    "\n" +
    "Convert to Decimal" +
    " " +
    parseFloat(secondDecimal + firstDecimal) +
    "\n" +
    "Convert To Integer" +
    "\ " +
    parseInt(secondInteger + firstInteger )
  );
 }

// It should display the expected output.
console.log(
  dataType(12, 4.32, "is the best place to learn and practice coding!")
);
