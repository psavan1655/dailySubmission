// Example of Class, Object, Inheritance, Abstraction, Polymorphism (function overloading and function overriding)
abstract class Vehicle {
    abstract void usedTo(String work);

    void start() {
        System.out.println("I'm Start Vehicle Method From Vehicle Class");
    }

    void stop() {
        System.out.println("I'm Stop Vehicle Method From Vehicle Class");
    }
}

class Drones extends Vehicle {
    void openDoor() {
        System.out.println("Open the Door of Drone");
    }

    void openDoor(String name) {
        System.out.println("Open the Door of Drone :" + name);
    }

    void usedTo(String work) {
        System.out.println("I am abstract Method of Vehicle Class : " + work);
    }
}

class Train extends Vehicle {
    void usedTo(String work) {
        System.out.println("I am abstract Method of Vehicle Class : " + work);
    }

    void weight() {
        int trainWeight = 2500;
        System.out.println("The Weight of Train is :" + trainWeight + "Kg");
    }
}

class BulletTrain extends Train {
    void weight() {
        int trainHeight = 150;
        // System.out.println("The Weight of Train is :" + trainWeight + "Kg");
        System.out.println("The Height of Bullet Train is :" + trainHeight + " Meter");
    }
}

public class HiteshGohel {
    public static void main(String[] args) {
        Drones d = new Drones(); // Object of Drones class
        Train t = new Train(); // Object of Train class
        BulletTrain bt = new BulletTrain();

        System.out.println("--------------------------------------------------");
        d.start(); // calling Method from parent class Vehicle
        t.stop(); // calling Method from parent class Vehicle
        d.usedTo("I'm Drone and I can Fly."); // calling abstract Method of Vehicle class into Drones
        t.usedTo("I'm Train, i can't Fly but i can Crush."); // calling abstract Method from Vehicle class into Train

        System.out.println("\n");
        System.out.println("--------------- Function Overloading -----------------");
        d.openDoor(); // calling the Method of Drone
        d.openDoor("Cora"); // example of Function OverLoading

        System.out.println("\n");
        System.out.println("--------------- Function Overriding -----------------");
        t.weight();
        bt.weight(); // Overriding the weight Function and pass new data into weight
        System.out.println("--------------------------------------------------");
    }
}
