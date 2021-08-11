// 27- Check whether the triangle is an equilateral, isosceles or scalene triangle.

let sideA = prompt('Enter Side A of Triangle :', 30)
let sideB = prompt('Enter Side B of Triangle :', 60)
let sideC = prompt('Enter Side C of Triangle :', 90)

if (sideA == sideB && sideB == sideC) {
  console.log('Triangle is Equilateral')
} else if (sideA == sideB || sideB == sideC || sideC == sideA) {
  console.log('Triangle is Isosceles')
} else {
  console.log('Triangle is Sceles')
}
