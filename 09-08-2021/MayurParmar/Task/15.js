// 15- The Greatest Number Among the Given Three Number (Also try for greatest number among n
// numbers)

let a = 110,
  b = 220,
  c = 40;

if (a < b) {
  if (b < c) {
    console.log("C is Big");
  } else {
    console.log("B is big");
  }
} else if (a < c) {
  console.log("C is big");
} else {
  console.log(" A is Big");
}
