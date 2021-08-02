abstract class  vehicle {
    vehicle() {
        System.out.println("I am Vehicle Class");
        System.out.println("I am perent class");
    }
    abstract void run (int a);
    void get(){
        System.out.println("i am non-absract");
    }
}
class Drone  extends vehicle{
void run (int a ){
    System.out.println("I am Abstract Method : " + a);
}


void get(int a){
    System.out.println("i am Child class method");
}
void run(int a, int b){
    System.out.println("A + b = " + (a+b));
}
    Drone(){
        System.out.println("I am Drone class.....");
        System.out.println("I am child class....");
    }
    public static void main(String ar[])
    {
        Drone obj =  new Drone();    
        obj.run(10);
        obj.run(10, 50);
        obj.get();
        this.obj.get();

    }
}