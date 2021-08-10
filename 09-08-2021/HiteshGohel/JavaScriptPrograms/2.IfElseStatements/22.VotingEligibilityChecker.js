// 22- Voting Eligibility Checker

const checkAge = (age) => {
  age < 18
    ? console.log(`You are ${age} old. and You're Not Eligible for Voting`)
    : console.log(`You are ${age} old. and You're Eligible for Voting`)
}
checkAge(115)
