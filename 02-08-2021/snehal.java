import java.io.*;
class feature
{
	public void see(int id,String name,String model)
	{
		System.out.println("id::"+id+"name::"+name+"model::"+model);
	}
	public void see(int id,String model)
	{
		System.out.println("id::"+id+"model::"+model);
	}
	
}
class speed
{
	public void fast(int sp)
	{
		System.out.println("speed is:"+sp);
	}
	
}
class bspeed extends speed
{
		public void fast(int sp)
		{
			System.out.println("speed of class b"+sp);
		}
}

 abstract class vehichle
{
	abstract void pi();
	void show()
	{
	int id=101;
	String name="car";
	System.out.println("id::"+id+"name::"+name);
	}
	
}
class droan extends  vehichle
{
	void disp()
	{
		String name="eroplane";
		System.out.println("name::"+name);
	}
	public void pi()
	{
		int p=100,r=12,n=10;
		int i=(p*r*n)/100;
		System.out.println("interest is :"+i);
	}
	
	public static void main(String args[])
	{
		droan d1 = new droan();
		d1.show();
		d1.disp();
		d1.pi();
		feature f1=new feature();
		f1.see(101,"farari","i2021");
		f1.see(102,"10pro");
		bspeed s1=new bspeed();
		s1.fast(20);
	}
}

