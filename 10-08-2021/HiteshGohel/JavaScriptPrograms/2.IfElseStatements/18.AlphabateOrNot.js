// 18- A Character Is an Alphabet or Not

function check(alphabates) {
  if (
    alphabates >= 'a' ||
    (alphabates <= 'z' && alphabates >= 'A') ||
    alphabates <= 'Z'
  ) {
    console.log(`${alphabates} is Alphabate`)
  } else {
    console.log(`${alphabates} is Not an Alphabate`)
  }
}

check('a')
