function dataType(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = "HackerRank ";
  
    // Return your output here.
   return (firstInteger + secondInteger + "\n" + parseFloat(firstDecimal + secondDecimal)+ "\n" + firstString + secondString);
  }
  
  // It should display the expected output.
  console.log(
    dataType(12, 4.32, "is the best place to learn and practice coding!")
  );
  