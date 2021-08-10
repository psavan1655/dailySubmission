// 21- The Date Is Correct or Not

let d = "12/12/2021";

const date = new Date(d);

if (date == "Invalid Date") {
  console.log("The Date Is NOT Correct ");
} else {
  console.log("The Date Is Correct ");
}
