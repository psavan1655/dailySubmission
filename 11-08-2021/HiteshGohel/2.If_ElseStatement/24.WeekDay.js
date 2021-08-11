// 24- Input week number and print weekday.

const WeekNumber = (weekNum) => {
  if (weekNum == 1) {
    console.log(`The Week Number ${weekNum} is Sunday`)
  } else if (weekNum == 2) {
    console.log(`The Week Number ${weekNum} is Monday`)
  } else if (weekNum == 3) {
    console.log(`The Week Number ${weekNum} is Tuesday`)
  } else if (weekNum == 4) {
    console.log(`The Week Number ${weekNum} is Wednesday`)
  } else if (weekNum == 5) {
    console.log(`The Week Number ${weekNum} is Thursday`)
  } else if (weekNum == 6) {
    console.log(`The Week Number ${weekNum} is Friday`)
  } else if (weekNum == 7) {
    console.log(`The Week Number ${weekNum} is Saturday`)
  } else {
    console.log(`The Week Number ${weekNum} you entered is invalid`)
  }
}
WeekNumber(4)
