// Find diameter, circumference and area of a circle using functions
let r = 10;

function diameter(r) {
  console.log("diameter: " + 2 * r);
}

function circumference(r) {
  console.log("circumference: " + 2 * Math.PI * r);
}

function area(r) {
  console.log("area: " + Math.PI * r ** 2);
}

diameter(r);
circumference(r);
area(r);
