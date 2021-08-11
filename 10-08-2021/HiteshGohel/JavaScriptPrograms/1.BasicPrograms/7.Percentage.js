let subjects = {
  Maths: 65,
  Science: 76,
  SocialScience: 81,
  English: 74,
  Hindi: 71,
}
console.log(subjects)
const { Maths, Science, SocialScience, English, Hindi } = subjects
let total = Maths + Science + SocialScience + English + Hindi
let percentage = total / Object.keys(subjects).length
alert('Percentage is : ' + percentage + '%')
console.log(`Total Marks : ${total}
Percentage : ${percentage}%`)
