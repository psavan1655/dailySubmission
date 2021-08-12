//class Program
//{
//    static void Main(string[] args)
//    {
//        System.Console.WriteLine("Hello World! aa");
//    }
//}

//using System;  
//    class Program
//{
//    static void Main(string[] args)
//    {
//        Console.WriteLine("Hello World!");
//    }
//}   

//using System;  
//namespace c
//{[-
//     class Program
//    {
//        static void Main(string[] args)
//        {
//            Console.WriteLine("Hello ghtt  hjkWorld!");
//        }
//    }
//}

//using System;      
//public class IfExample
//{
//    public static void Main(string[] args)
//    {
//        Console.WriteLine("Enter a number to check grade:");
//        int num = Convert.ToInt32(Console.ReadLine());

//        if (num < 0 || num > 100)
//        {
//            Console.WriteLine("wrong number");
//        }
//        else if (num >= 0 && num < 50)
//        {
//            Console.WriteLine("Fail");
//        }
//        else if ( num >= 50 && num < 60)
//        {
//            Console.WriteLine("D Grade");
//        }
//        else if (num >= 60 && num < 70)
//        {
//            Console.WriteLine("C Grade");
//        }
//        else if (num >= 70 && num < 80)
//        {
//            Console.WriteLine("B Grade");
//        }
//        else if (num >= 80 && num < 90)
//        {
//            Console.WriteLine("A Grade");
//        }
//        else if (num >= 90 && num <= 100)
//        {
//            Console.WriteLine("A+ Grade");
//        }
//    }
//}


//using system;
//public class whileexample
//{
//    public static void main(string[] args)
//    {
//        int i = 1;
//        while (i <= 10)
//        {

//            i++;
//        }
//        console.writeline(i);
//    } 
//}

//using System;  
//public class WhileExample
//{
//    public static void Main(string[] args)
//    {
//        int i = 1;
//        while (i <= 3)
//        {
//            Console.WriteLine(i + " ");
//            i++;
//            int j = 1;
//            while (j <= 3)
//            {
//                Console.WriteLine( " "+j);
//                j++;
//            }

//        }
//    }
//}


//using System;
//public class whileexample
//{
//    public static void Main(string[] args)
//    {
//        int i = 1;
//        while (i <= 10)
//        {

//            i++;
//        }
//         Console.WriteLine(i);
//    }
//}


//using System;  
//public class BreakExample
//{
//    public static void Main(string[] args)
//    {
//        for (int i = 1; i <= 3; i++)
//        {
//            for (int j = 1; j <= 3; j++)
//            {
//                if (i == 2 && j == 2)
//                {
//                    break;
//                }
//                Console.WriteLine(i + " " + j);
//                i++;
//            }
//        }
//    }
//}


//using System;
//namespace FunctionExample
//{ 
//    class Program
//    {
//        // User defined function without return type  
//        public void A() // No Parameter  
//        {
//            Console.WriteLine("This is non parameterized function");

//        }
//        public void B(int a) // No Parameter  
//        {
//            Console.WriteLine(a);

//        }
//        public void C(int b) // No Parameter  
//        {
//            Console.WriteLine(b); 
//            return;

//        }
//        public void D() // No Parameter  
//        {
//            Console.WriteLine("This is non parameterized function");
//            return;
//        }

//        static void Main(string[] args)
//        {
//            Program program = new Program(); // Creating Object  
//            program.A(); // Calling Function
//            program.B(8);
//            program.C(9);
//            program.D();
//        }
//    }
//}

//using System;  
//namespace CallByValue  
//{  
//    class Program  
//    {  
//        // User defined function  
//        public void Show(int val)  
//        {  
//             val *= val; // Manipulating value  
//            Console.WriteLine("Value inside the show function "+val);  
//            // No return statement  
//        }  
//        // Main function, execution entry point of the program  
//        static void Main(string[]args)  
//        {  
//            int val = 50;  
//            Program program = new Program(); // Creating Object  
//            Console.WriteLine("Value before calling the function "+val);  
//           /* program.Show(val);*/ // Calling Function by passing value            
//            Console.WriteLine("Value after calling the function " + val);  
//        }  
//    }  
//} 

//using System;
//public class Array
//{
//    public static void Main(string[] args)
//    {
//        int[] arr = { 10, 20, 30, 40, 50 };//creating and initializing array  

//        //traversing array  
//        foreach (int i in arr)
//        {
//            Console.WriteLine(i);
//        }
//    }
//}

//using System;
//public class ArrayExample
//{
//    static void printArray(int[] arr)
//    {
//        Console.WriteLine("Printing array elements:");
//        for (int i = 0; i < arr.Length; i++)
//        {
//            Console.WriteLine(arr[i]);
//        }
//    }


//    public static void Main(string[] args)
//    {
//        int[] arr1 = { 25, 10, 20, 15, 40, 50 };
//        int[] arr2 = { 12, 23, 44, 11, 54 };
//        printArray(arr1);//passing array to function  
//        printArray(arr2);
//    }
//}


//using System
//    class A
//{
//     void m1()
//    {
//        Console.WriteLine("A");
//    }
//}
//class B extends A
//{
//     void m1()
//    {
//        Console.WriteLine("B");
//    }
//     public static void Main(string[] args)
//{
//    B b1 = new B();
//    b1.m1()
//}
//}



using System;
namespace h1
{
    public class A
    {
        public static void Main(string[] args)
        {
            //------------------area and perameter of circle--------------------------

            //double r, area, per_cir;
            //double PI = 3.14;
            //Console.WriteLine("Input the radius of the circle : ");
            //r = Convert.ToDouble(Console.ReadLine());
            //per_cir = 2 * PI * r;
            //Console.WriteLine($"perameter { per_cir}");
            //area = PI * r * r;
            //Console.WriteLine($"area { area}");

            //----------------------- area of triangle --------------------------------------
            //double area1, w, h;
            //Console.WriteLine("hignt");
            //w = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("wi");
            //h = Convert.ToDouble(Console.ReadLine());
            //area1 = (h * w) / 2;
            //Console.WriteLine($"area { area1}");
            //-----------------------% in 5 sub -----------------------------------------------------
            //double avg, s1, s2, s3, s4, s5;
            //Console.WriteLine("s1 marks");
            //s1 = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("s2 marks");
            //s2 = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("s3 marks");
            //s3 = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("s4 ");
            //s4 = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("s5");
            //s5 = Convert.ToDouble(Console.ReadLine());
            //avg = (s1 + s2 + s3 + s4 + s5) / 2;
            //Console.WriteLine($"avg marks {avg}");

            //------------factorial---------------------------------------------------------------
            //int fact =1 ,i,n;
            //Console.WriteLine("fact");
            //n = Convert.ToInt32(Console.ReadLine());
            //for ( i = 1; i <=n;i++)
            //{
            //    fact =fact* i;
            //}
            //Console.WriteLine($"factorail is   { fact}");
            //// -----------------cel to fahrenheit-------------------------------------------------
            //            double c, f;
            //            Console.WriteLine("celsuis");
            //            c= Convert.ToInt32(Console.ReadLine());
            //            f = (c * 9) / 5 + 32;
            //            Console.WriteLine($"fahrenhit is   { f}");
            // --------------abbrivation in person name ---------------------------------------
            //string a1;
            // Console.WriteLine("person name");
            // a1 = Convert.ToString(Console.ReadLine());

            // string[] a1List = a1.Split();  
            // foreach(string author in a1List)  
            // Console.WriteLine(author);
            //----------ascii value of char -----------------------------------------------------
            //string stri ;
            //Console.WriteLine("  cheak ascii char");
            //stri = Convert.ToString(Console.ReadLine());

            //foreach (var z in stri)
            //{
            //    Console.WriteLine((int)z);
            //}
            //-------------gross salary -----------------------------------------------------------
            //Double bsal, p, tsalary;

            //Console.Write("Enter Basic Salary : ");
            //bsal = Convert.ToInt32(Console.ReadLine());
            //p = (bsal * 40) / 100;
            //tsalary = bsal + p;
            //Console.Write($"p  {p} " );
            //Console.Write($"totalsalary  {tsalary}");

            //-----------------postivie or negative -----------------------------------------
            //Double x;
            //Console.Write("postive or neg: ");
            //x = Convert.ToDouble(Console.ReadLine());
            //        if(x==0)
            //        {
            //            Console.WriteLine("constant ");
            //        }
            //        else if (x >= 0)
            //        {
            //            Console.WriteLine("postive");
            //        }
            //        else if(x<=0)
            //        {
            //            Console.WriteLine("neg");
            //        }

            //Double x;
            //Console.Write("stive or neg: ");
            //x = Convert.ToDouble(Console.ReadLine());

            //(x == 0) ? "c":((x > 0) ?"p" : "n");

            // Double x,y,z;

            //Console.Write("x ");
            //x = Convert.ToDouble(Console.ReadLine());
            //Console.Write("y ");
            //y = Convert.ToDouble(Console.ReadLine());

            //Console.Write("z ");
            //z = Convert.ToDouble(Console.ReadLine());

            //-------------------vowel or not---------------------------------

            //char j;
            //Console.Write("j");
            //j = Convert.ToChar(Console.ReadLine());
            //if (j=='a'|| j == 'e' || j == 'i' ||j =='o'||j=='u')
            //    {
            //    Console.WriteLine("vowel"); 
            //    }
            //else
            //{
            //    Console.WriteLine("consonant");
            //}





            //--------------------vowel or consonant -----------------------------------------
            //char j;
            //  Console.WriteLine("j");
            //  j = Convert.ToChar(Console.ReadLine());
            //  if (j=='a'|| j == 'e'|| j == 'i'|| j == 'o'|| j == 'u'|| j == 'A' || j == 'E' || j == 'I' || j == 'O' || j == 'U')
            //  {
            //      Console.WriteLine("VOWEL");
            //  }
            //  else
            //  {
            //      Console.WriteLine("consonant");
            //  }

            //------------------odd or even--------------------------------
            //int k;
            //Console.WriteLine("k");
            //k = Convert.ToInt32(Console.ReadLine());
            //if ( k % 2 == 0)
            //{
            //    Console.WriteLine("even");
            //}
            //else
            //{
            //    Console.WriteLine("odd");
            //}

            //---------leap year -----------------------------------------------------

            //int z;
            //Console.WriteLine("z");
            //z = Convert.ToInt32(Console.ReadLine());
            //if (z % 4== 0)
            //{
            //    Console.WriteLine("leap year");
            //}
            //else
            //{
            //    Console.WriteLine("not leap year ");
            //}

            //---------voting  -----------------------------------------------------

            //int z1;
            //Console.WriteLine("z1");
            //z1 = Convert.ToInt32(Console.ReadLine());
            //if (z1 >=18)
            //{
            //    Console.WriteLine("agible");
            //}
            //else
            //{
            //    Console.WriteLine("not agible ");
            //}
            //---------------div 5 and 11 ----------------------------------

            //int z1;
            //Console.WriteLine("z1");
            //z1 = Convert.ToInt32(Console.ReadLine());
            //if (z1 %5==0 && z1 % 11 == 0)
            //{
            //    Console.WriteLine("div by 5 and 11");
            //}
            //else
            //{
            //    Console.WriteLine("not div 5 or 11  ");
            //}



            //int year;
            //double princamt, rate, interest, total_amt;
            //Console.Write("Enter The Loan Amount : ");
            //princamt = Convert.ToDouble(Console.ReadLine());
            //Console.Write("Enter The Number of Years : ");
            //year = Convert.ToInt16(Console.ReadLine());
            //Console.Write("Enter the Rate Of Interest : ");
            //rate = Convert.ToDouble(Console.ReadLine());
            //interest = princamt * year * rate / 100;
            //total_amt = princamt + interest;
            //Console.WriteLine("Total Amount : {0}", total_amt);
            //Console.ReadLine();

            // -------------------week no and week day --------------------------

            // int w1;
            // Console.WriteLine("w1");
            // w1 = Convert.ToInt32(Console.ReadLine());
            // if (w1==1)
            // {
            //     Console.WriteLine("MONDAY");
            // }
            //else  if (w1 == 2)
            // {
            //     Console.WriteLine("tuseday");
            // }
            // else if (w1 == 3)
            // {
            //     Console.WriteLine("wednesday");
            // }
            // else if (w1 == 4)
            // {
            //     Console.WriteLine("thurseday");
            // }
            // else if (w1 == 5)
            // {
            //     Console.WriteLine("friday");
            // }
            // else if (w1 == 6)
            // {
            //     Console.WriteLine("saturday");
            // }
            // else if (w1 == 7)
            // {
            //     Console.WriteLine("sunday");
            // }
            // else
            // {

            //     Console.WriteLine("enter value of number 1 t0 7 only ");
            // }

            // ---------------------angle is triangle or not ---------------------------------

            //int a1, a2, a3;
            //Console.WriteLine("a1");
            //a1 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("a2");
            //a2 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("a3");
            //a3 = Convert.ToInt32(Console.ReadLine());


            //if (a1 + a2 >= a3 || a2 + a3 >= a1 || a3 + a1 >= a2)
            //{
            //    Console.WriteLine(" valid triangle");
            //}
            //else
            //{
            //    Console.WriteLine(" not valid triangle");
            //}

            //----------lcm-----------------------------
            //int a1, a2;
            //Console.WriteLine("a1");
            //a1 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("a2");
            //a2 = Convert.ToInt32(Console.ReadLine());
            //int a, b, Num1, Num2, temp, LCM, GCD;
            //Console.WriteLine("Calculate LCM and GCD\nEnter the two numbers to Calculate..");
            //a = int.Parse(Console.ReadLine());
            //b = int.Parse(Console.ReadLine());
            //Console.WriteLine("Calculating....");

            //Num1 = a;
            //Num2 = b;
            //while (Num2 != 0)
            //{
            //    temp = Num2;
            //    Num2 = Num1 % Num2;
            //    Num1 = temp;
            //}
            //GCD = Num1;
            //LCM = (a * b) / GCD;
            //Console.WriteLine($"LCM { LCM}");
            //Console.WriteLine($"GCD  {GCD}");
            //-------------------3 no max -------------------------------------------------------------
            //int a1, a2,a3;
            //Console.WriteLine("a1");
            //a1 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("a2");
            //a2 = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("a3");
            //a3= Convert.ToInt32(Console.ReadLine());
            //if (a1>=a2 && a1>=a3)
            //{
            //    Console.WriteLine(" n1 max");   
            //}
            //else if (a2 >= a3 && a2 >= a1)
            //{
            //    Console.WriteLine(" n2 max");
            //}
            //else if (a3 >= a1 && a3 >= a1)
            //{
            //    Console.WriteLine(" n3 max");
            //}
            //--------------alphabaet-------------------
            //char r;
            // Console.WriteLine("r");

            // r = Convert.ToChar(Console.ReadLine());
            // if ((r >= 97 && r <= 122) || (r >= 65 && r <= 90))
            // {
            //     Console.WriteLine("is aplhabet");
            // }
            // else
            // {
            //     Console.WriteLine("is not  aplhabet");
            // }





            //int s=0,n,i;
            //Console.WriteLine("n");
            // n= Convert.ToInt32(Console.ReadLine());
            //for (i = 1; i <= n; i++)
            //{
            //    s = s + i * i;

            //}
            //Console.WriteLine($"sum {s}");
            //-----------------palindrom-----------------------------------

            //double org, r,n,s=0;
           
            
            //Console.WriteLine("n");
            // n= Convert.ToDouble(Console.ReadLine());
            //org = n;
            //while (n > 0)
            //{
            //    r = n % 10;
            //    s =( s * 10) +r;
            //    n = n/ 10;
            //}


            //if (s == org) 
            //  Console.WriteLine($"palindrome {org}");
            //else
            //    Console.WriteLine($"not a palindrome  {org}");


            //double org, r, n, s = 0;


            //Console.WriteLine("n");
            //n = Convert.ToDouble(Console.ReadLine());
            //org = n;
            //while (n > 0)
            //{
            //    r = n % 10;
            //    s = s + r*r*r;
            //    n = n / 10;
            //}  


            //if (s == org)
            //    Console.WriteLine($"arm {org}");
            //else
            //    Console.WriteLine($"not arm {org}");




        

        }

    }  
}
