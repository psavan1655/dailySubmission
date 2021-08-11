let v = 34;
let pi =3.14;
let h =13;
let r = 2.6;
let choice= 2;
switch (choice) {
    case 1:
        let radius =Math.sqrt(v/(pi * h));
        console.log("radius of Cylinder is" , radius)
        
        break;
    case 2:
        let circumference = 2 * pi * r;
        console.log("Circumference of Cylinder is" ,circumference);
        break;

        case 3:
            let volume = pi * r * r * h;
            console.log("Volume is" , volume);
    default:
        console.log("Invalid choice");
}