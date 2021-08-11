// 21- The Date Is Correct or Not

function checkValidDate(newDateString) {
  const date = new Date(newDateString)
  if (date != 'Invalid Date') {
    console.log(`The ${newDateString} is Valid Date`)
  } else {
    console.log(`The ${newDateString} is Not Valid Date`)
  }
}
checkValidDate('2020-12-13')
