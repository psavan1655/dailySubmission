abstract class  vehicle {
    vehicle() {
        System.out.println("I am Vehicle Class");
        System.out.println("I am perent class");
    }
    abstract void run (int a);
}
class Drone  extends vehicle{
void run (int a ){
    System.out.println("I am Abstract Method" + a);
}
    Drone(){
        System.out.println("I am Drone class.....");
        System.out.println("I am child class....");
    }
    public static void main(String ar[])
    {
        Drone obj =  new Drone();    
        obj.run(10);
    }
}