class vehicle{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

}
class drone extends vehicle{
    constructor(test,price, dname,dyear){
        super()
        this.name;
        this.year;
        this.dname = dname;
        this.test = test;
        this.price = price;
        this.dyear = dyear;

    }
}
const myvehicle = new vehicle("bmw",2020);
const mydrone = new drone("automatic",5555, "richa",2021);
console.log( myvehicle, mydrone);

// function Person(firstName, lastName) {
//     this.FirstName = firstName || "unknown";
//     this.LastName = lastName || "unknown";
// };

// Person.prototype.getFullName = function () {
//     return this.FirstName + " " + this.LastName;
// }
// function Student(firstName, lastName, schoolName, grade)
// {
//     Person.call(this, firstName, lastName);

//     this.SchoolName = schoolName || "unknown";
//     this.Grade = grade || 0;
// }
// //Student.prototype = Person.prototype;
// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// console.log( myperson, mystudent);
// 
class Shape {
    area() {
      return 0;
    }
    perimeter() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Circle extends Shape {
    constructor(r) {
      super();
      this.radius = r;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    perimeter() {
      return Math.PI * this.radius * 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(w, h) {
      super();
      this.width = w;
      this.height = h;
    }
  
    area() {
      return this.width * this.height;
    }
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
      if (shape instanceof Shape) {
        console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
        console.log(
          `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
        );
        return sum + shape.area();
      }
      throw Error("Bad argument shape.");
    }, 0);
  }
  
  const shapes = [new Circle(3), new Rectangle(2, 3)];
  
  console.log(cumulateShapes(shapes));

