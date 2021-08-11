// 26- Input angles of a triangle and check whether the triangle is valid or not.

let side1 = prompt('Enter Side A of Triangle :', 30)
let side2 = prompt('Enter Side B of Triangle :', 60)
let side3 = prompt('Enter Side C of Triangle :', 90)

const TotalOfAllSide = Number(side1) + Number(side2) + Number(side3)
console.log(TotalOfAllSide)
if (TotalOfAllSide == 180 && side1 > 0 && side2 > 0 && side3 > 0) {
  alert('Triangle is Valid')
  console.log('Triangle is Valid')
} else {
  alert('Triangle is Not Valid')
  console.log('Triangle is Not Valid')
}
