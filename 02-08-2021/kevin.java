// this is Override prog.

class car {
    void draw() {
        System.out.println("Drawing to car design");
    }
}

class drone extends car {
    // override
    @Override
    void draw() {
        super.draw();
        System.out.println("Drawing to Dron Design");
    }
}
class demo  {
    public static void main(String[] args) {
    car r=new drone();
    r.draw();
    }
}

//this is overloading prog.
class vehicle {
    // overloading
    void car() {
        int a =10 , b = 20, c;
        c = a + b;
        System.out.println("How many car in ShowRoom" +" "+ c);
    }

    void car(int x, int y) {
        int c;
        c = x + y;
        System.out.println("How many car is sale July" +" "+ c);
    }

    void car(int x, double y) {
        double c;
        c = x + y;
        System.out.println("How many Car Profit in july" +" "+ c);
    }

public static void main(String[] args) {
    vehicle obj = new vehicle();
    obj.car();
    obj.car(15,20);
    obj.car(2000000,2500000.52);
    
}
}

// This is InterFace simple prg.

import java.util.Scanner;

interface clientOne {
    void input();//public+abstract
    void output();// public+abstract
}

class developer implements clientOne {
    String name;
    double sal;

  public  void input() {
        Scanner scanner= new Scanner(System.in);
        System.out.println("Enter name:");
        name = scanner.nextLine();
        System.out.println("Enter Salary:");
        sal = scanner.nextDouble();
    }

  public  void output() {
        System.out.println(name + " " + sal);
    }
public static void main(String[] args) {
    clientOne obj = new developer();

    obj.input();
    obj.output();
}
}

// this is Public Static and Final prg.
interface customer {
    String name = "kevin";// public + static +final
    int amt = 10; //public + static +final

    void purchase();// public+abstract
}

class seller implements customer {
    // overrider
    @Override
    public void purchase() {
        // amt, name  is final
        System.out.println(name + " " + "need" + " " + amt + " " + "Kg rice");
    }
}

class CheckCust {
    public static void main(String[] args) {
        customer obj = new seller();
        obj.purchase();
        System.out.println(customer.name);//stitic abstract method not depend in obj.
        System.out.println(customer.amt);
    }

}

// This is a abstract Methods Prg.

interface client {
    void Webdesign();// public+abstract

    void WebDevelope();// public+abstract
}


abstract class KevinTech implements client {
    public void Webdesign() {
        System.out.println("Red,Menu,Button");
    }
}
// Multilevel Inheritance
class SaifTech extends KevinTech {
    @Override
    public void WebDevelope()
    {
        System.out.println("HTML,CSS,JS");
    }
}

class Check {
    public static void main(String[] args) {
        SaifTech obj = new SaifTech();
        obj.Webdesign();
        obj.WebDevelope();
    }
}
// This is Using InteFace in multiple inheritance

interface a {
    void show();
}

interface b{
    void Disp();     
}

class multiple implements a,b {
        public void show() {
        System.out.println("This is Vehicle");
        System.out.println("This is Drone");
    }
    public static void main(String[] args) {
        multiple obj =new multiple();
        obj.show();
    }
}
//this is abstract class and consructor Prog using  Hierarchical inheritance.
// abstract class
abstract class newvehicle {
    //cousructor
    newvehicle() {
        System.out.println("All Vehicle.....!");
    }
    
    // abstract method
    public abstract void sound();
}
// Hierarchical inheritance
class AMG extends newvehicle {
    AMG(){
        super();
    }
    public void sound() {
            System.out.println("Car is Vroom ");
        }    
}

class bike extends newvehicle {
    bike() {
        super();
    }
    public void sound() {
        System.out.println("Bike is Vroom");
    }  
}

class abstct {
    public static void main(String[] args) {
        // abstract can't create obj but create ref.
        AMG obj = new AMG();
        bike obj2 = new bike();
        obj.sound();
        obj2.sound();
    }
}
// This is simple Inheritace.
class vehicle {
    public void car() {
        System.out.println("I am Car");
    }

    public void run() {
        System.out.println("i am running");
    }
}

// simple inheritance
class Drone extends vehicle {
    public void fly(){
        System.out.println("i am using drone and shoot the video");
    }

    public static void main(String[] args) {
        Drone audi = new Drone();
        audi.car();
        audi.run();
        audi.fly();
    }

}