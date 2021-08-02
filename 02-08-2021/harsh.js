class Vehicle{
    constructor(test,test1,test2,name) {
        this.name = name;
        this.test = test
        this.test1 = test1
        this.test2 = test2
        
    }
    makeSpeed(){
        console.log("110km/hr")
    }
}

class Drone extends Vehicle{
    constructor(){
        super();
        // this.name = "harsh";
        // this.dtest = dtest
    }

    makeSpeed(){
        console.log("150km/hr", this.name);
    }
}

const a1 = new Drone()
const a2 = new Vehicle()
a1.makeSpeed()
a2.makeSpeed()
console.log(a1);
console.log(a2);
