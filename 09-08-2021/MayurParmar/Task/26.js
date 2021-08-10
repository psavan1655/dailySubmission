// Input angles of a triangle and check whether the triangle is valid or not
let sum = 0;
let angle1 = 0,
  angle2 = 0,
  angle3 = 0;

angle3 = 120;
angle2 = 30;
angle1 = 30;

sum = angle1 + angle2 + angle3;

if (sum == 180 && angle3 > 0 && angle2 > 0 && angle1 > 0) {
  console.log("Triangle is valid.");
} else {
  console.log("Triangle is not valid.");
}
