// 8- Converting Temperature Celsius into Fahrenheit

function celsius(a) {
  let cTmp = a;
  let cToFahr = (cTmp * 9) / 5 + 32;
  var msg = cTmp + "\xB0C is " + cToFahr + "\xB0F.";
  console.log(msg);
}

celsius(20);

function fahrenheit(b) {
  let ftmp = b;
  let fTocel = ((ftmp - 32) * 5) / 9;
  console.log(ftmp + "\xB0F is " + fTocel + "\xB0C.");
}
fahrenheit(40);
