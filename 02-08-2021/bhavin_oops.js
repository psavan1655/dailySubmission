// let vname,vyear,vage =  vehicle()
let vname,vyear,vage;
class vehicle {
    
    constructor(vname, vyear, vage) {
        // super()
        this.vname = vname
        this.vyear = vyear
        this.vage = vage
    }
    //  speedis=()=>{
    //     ("104 km/h ");
    // }
        
 
}

let loads;
class drone extends vehicle {
    constructor(loads,vname,vage,vyear) {
        super()
        this.loads = loads
        // newvehicle.call(this.vname,this.vyear,this.vage)
        this.vname=vname
        this.vyear=vyear
        this.vage=vage
    }
}
class truck extends vehicle{
    constructor(tyres){
        this.tyres=tyres
    }
}



const myvehicle = new vehicle("vw-polo", "2021", 4);
// console.log(vyear);
const mydrone = new drone("jcb", 2011, 21, "sjjs");
console.log(myvehicle, mydrone);
// console.log(speedis());

// console.log(vehicle);
// return this.loads + "d";
// console.log(vage);
// console.log(vname);
//  let vYear = console.log("dfsf");
