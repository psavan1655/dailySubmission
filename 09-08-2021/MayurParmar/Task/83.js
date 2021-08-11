// Check whether a number is prime, Armstrong or perfect number using functions.
let number = 7;

function prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

function Armstrong(number) {
  let str = String(number);
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str.charAt(i);
  }

  if (newstr == str) {
    return 0;
  } else {
    if (number == Number(newstr)) {
      return 0;
    } else {
      return 1;
    }
  }
}

function perfect(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == number) {
    return 1;
  } else {
    return 0;
  }
}

if (prime(number)) {
  console.log("Number Of " + number + " is a Prime Number.");
} else {
  console.log("Number Of " + number + " is a 'NOT' Prime Number.");
}

if (Armstrong(number)) {
  console.log("Number Of " + number + " is a 'NOT' Armstrong Number.");
} else {
  console.log("Number Of " + number + " is a Armstrong Number.");
}

if (perfect(number)) {
  console.log("Number Of " + number + " is a Perfect Number.");
} else {
  console.log("Number Of " + number + " is a NOT Perfect Number.");
}
