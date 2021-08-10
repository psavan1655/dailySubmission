//  Find Radius, Circumference and Volume of Cylinder

// r is the radius of the cylinder
// h is the height of the cylinder
// V is the volume of the cylinder

// V=pie x r2 x h

let r = 10;
let h = 10;

let info = "Radius";

switch (info) {
  case "Volume": {
    let v = Math.PI * r ** 2 * h;

    console.log("Volume of the cylinder : " + v);
    break;
  }
  case "Radius": {
    let R = Math.PI * r * 2 * h;
    console.log("Radius :" + R);
    break;
  }
  case "circumference": {
    let c = 2 * Math.PI * r;
    console.log("circumference : " + c);
    break;
  }
  default: {
    console.log("plz select onlyRadius, Circumference and Volume of Cylinder");
  }
}

// V = πr2h; Radius
