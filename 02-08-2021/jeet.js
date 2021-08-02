// <!-- <!DOCTYPE html>
// <html>
//   <head>
//     <title>
//       class & object
//     </title>
//   </head>
//   <body>
//     <div id="root" ></div>
//     <script>
//       class Vehicle{
//         constructor(two,year){
//           this.two = two;
//           this.year = year;
//         }
// age(){
//   let date = new Date();
//   return date.getFullYear() - this.year;
// }
// 112}
//       let myVehicle = new Vehicle("Volvo" , 2014);
//       document.getElementById("root").innerHTML = 
//       "my vehicle " +myVehicle.age()+ "years old";
//     </script>
//   </body>
// </html>


// Z -->



class Vehicle{
  constructor(tier,engine,glass,name) {
      this.name = name;
      this.tier= tier
      this.engine = engine
      this.glass = glass
      
  }
  makeSpeed(){
      console.log("120km/hr")
  }
}

class Drone extends Vehicle{
  constructor(){
      super();
      // this.name = "harsh";
      // this.dtest = dtest
  }

  makeSpeed(){
      console.log("320km/hr", this.name);
  }
}

const a1 = new Drone()
// const a2 = new Vehicle()
// a1.makeSpeed()
// a2.makeSpeed()
console.log(a1);
// console.log(a2);