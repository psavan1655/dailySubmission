// 20- Leap Year

let year = 2019;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (Year % 400 == 0) {
      console.log("This year is Leap Year.");
    } else {
      console.log("This year is not Leap Year.");
    }
  } else {
    console.log("This Year is leap Year.");
  }
} else {
  console.log("This year is not a Leap Year.");
}
