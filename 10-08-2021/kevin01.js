//Array

// let myFrds = ["kevin", "raj", "Harshil"];
// console.log(myFrds[myFrds.length-1]);
// console.log(myFrds.length);

//loop in array

//for..in Loop
let myFrds = ["kevin", "raj", "Harshil"];
for (let elemets in myFrds) {
  console.log(elemets);
}

//for..of
let myName = ["kevin", "patel"];
for (let elemets of myName) {
  console.log(elemets);
}

//for..each
let surname = ["patidar", "patel", "sadarvashi"];
surname.forEach((elemets, index, array) => {
  console.log(elemets + "index No: " + index + " " + array);
});

const months = ["jan", "fed", "march", "april", "june", "july"];

const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);
// console.log(newMonth);

const indexOfMonth = months.indexOf("march");
if (indexOfMonth != -1) {
    const updateMonth = months.splice(indexOfMonth, 3, "April");
    console.log(updateMonth);
} else {
  console.log("No such Data Found");
}

console.log(months);

//lastIndexOF
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
//includes
const array1 = [1, 2, 3];
console.log(array1.includes(2));
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("at"));

//find
const array2 = [5, 12, 8, 130, 44];
const found = array2.find((element) => element > 10);
console.log(found);

//filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
