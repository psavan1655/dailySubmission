// - Find A Grade Of Given Marks or (Find a Grade of Given Marks Using Switch Case

let math = 99;
let guj = 70;
let eng = 61;
let sci = 45;
let hindi = 76;

let total = math + guj + eng + sci + hindi;

let Percentage = total / 5;

console.log("Percentage of 5 Subjects: " + Percentage + "%");

let b = Percentage / 10;
switch (Math.trunc(b)) {
  case 10: {
    console.log("Grade is : A ");
    break;
  }
  case 9: {
    console.log("Grade is : A ");
    break;
  }
  case 8: {
    console.log("Grade is : B ");
    break;
  }
  case 7: {
    console.log("Grade is : B ");
    break;
  }
  case 6: {
    console.log("Grade is : C ");
    break;
  }
  case 5: {
    console.log("Grade is : C ");
    break;
  }
  case 4: {
    console.log("Grade is : C ");
    break;
  }
  default:
    console.log("Your are Fila");
}
