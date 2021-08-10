let side1, side2, side3;
side1 = 10;
side2 = 100;
side3 = 1000;
if (side1 == side2 && side2 == side3)
  console.log("The Given Triangle is equilateral\n");
else if (side1 == side2 || side2 == side3 || side3 == side1)
  console.log("The given Triangle is isosceles\n");
else console.log("The given Triangle is scalene\n");
