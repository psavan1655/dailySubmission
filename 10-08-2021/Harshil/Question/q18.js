let alphabet = 'a'
function isCharacterALetter(alphabet) {
    return (/[a-zA-Z]/).test(alphabet)
  }
  console.log(isCharacterALetter(alphabet));