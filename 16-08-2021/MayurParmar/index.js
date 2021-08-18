// object
let dioData = {
  fname: "Mayur",
  lname: "Parmar",
  age: 23,
  gender: "Male",
  address: "Gandhinagar",
  getAll: function () {
    console.log(
      "My Name is " +
        dioData.fname +
        " " +
        dioData.lname +
        ".\nMy Age is " +
        dioData.age +
        ".\nI am living in " +
        dioData.address +
        "."
    );
  },
};

console.log("First Name: " + dioData.fname);
dioData.getAll();

let dioData2 = {
  fname: "Mayur",
  lname: "Parmar",
  age: 23,
  gender: "Male",
  address: "Gandhinagar",
  getAll() {
    console.log(
      "My Name is " +
        dioData.fname +
        " " +
        dioData.lname +
        ".\nMy Age is " +
        dioData.age +
        ".\nI am living in " +
        dioData.address +
        "."
    );
  },
};
dioData.getAll();

let dioData3 = {
  fname: "Mayur",
  lname: "Parmar",
  age: 23,
  gender: "Male",
  address: "Gandhinagar",
  getAll: function () {
    console.log(
      "My Name is " +
        this.fname +
        " " +
        this.lname +
        ".\nMy Age is " +
        this.age +
        ".\nI am living in " +
        this.address +
        "."
    );
  },
};
dioData3.getAll();

let FullName = {
  name: {
    fname: "Mayur",
    lname: "Parmar",
  },
};
console.log("Full Name : " + FullName.name.lname);

console.log(this); // this run node and console in broser both output is diffrent

function get() {
  console.log(this);
}
get(); // this run node and console in broser both output is diffrent

let name = "mayur";
const Myname = () => console.log(this.name);
Myname();
