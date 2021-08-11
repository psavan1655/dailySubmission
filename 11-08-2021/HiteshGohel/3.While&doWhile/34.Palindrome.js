// 34.Palindrome.js

const Palindrome = (num) => {
  let numStr = String(num)
  let lengthOfStr = numStr.length
  let newString = ''
  while (lengthOfStr > 0) {
    newString = newString + numStr.charAt(lengthOfStr)
    lengthOfStr--
  }

  if (newString == numStr) {
    console.log(`The ${num} is Palindrome Number`)
  } else {
    console.log(`The ${num} is Not an Palindrome Number`)
  }
}

Palindrome(1210)
