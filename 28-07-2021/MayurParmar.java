class a extends B{
	a(){
	System.out.println("i am con....");
	}
	void me() {
		System.out.println("i am me method");
	}
	
	void getData(){
		System.out.println("i am class A....");
	}
	
	void getData(int a , double b){
		System.out.println("A : "+ a);
		System.out.println("B : "+ b);
		System.out.println("A + B =  "+ (a+b));
		
	}
	
	
	void getData (int a, String b){
		System.out.println("A:"+ a + ", B:"+ b + ", A + b = "+ (a+b));
	}
	
	
	public static void main (String ar[]){
		a me = new a();
		System.out.println("Hello Word...");
		me.getData();		
		me.getData();		
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.me();
		me.getData(100, 10.6);
		me.getData(100,20);
		me.getData(45, "mayur");
	}
}

class B {
	void getData(){
		System.out.println("I am a Class B.....");
	}
}