// 20- Leap Year

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`The ${year} is Leap Year`)
  } else {
    console.log(`The ${year} is Not Leap Year`)
  }
}

checkLeapYear(2020)
