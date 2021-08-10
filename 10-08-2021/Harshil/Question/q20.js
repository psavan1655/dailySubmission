let year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("year is leap year");
    } else {
      console.log("Year is not leap Year");
    }
  } else {
    console.log("Year is leap Year");
  }
} else {
  console.log("Year is not leap year");
}