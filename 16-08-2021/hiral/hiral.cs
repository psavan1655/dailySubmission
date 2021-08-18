using System;

namespace h3
{
    class Program
    {

        static void Main(string[] args)
        {
            //Console.WriteLine("n");
            //n = Convert.ToInt32(Console.ReadLine());
            //for (int i = 5; i >= 1; i--)
            //{
            //    for (int k = 5 - 1; k > 1; k--)

            //        Console.Write(" ");

            //    for (int j = i; j >= 1; j--)

            //        Console.Write('*');
            //    Console.WriteLine();

            //}
            //int n = 9;

            //for (int i = 1; i <=n; i++)
            //{

            //    for  (int j= 1;j<=n*2-1;j++)
            //    {

            //        if (j >=i && j<=2*n- i) 
            //        {
            //            Console.Write("*");
            //        }
            //        else
            //        {
            //            Console.Write(" ");
            //        }

            //    }
            //    Console.WriteLine();

            //}




            //int i, j, k,n=6;
            //for(i=1;i<=n;i++)
            //{
            //    for (k = n ; k > i; k--)
            //        Console.Write("@");
            //    for(j=i;j>=1;j--)
            //        Console.Write(j);//"*  "
            //    Console.WriteLine();
            //}

            //int i, j, k, n = 6;
            //for (i = 1; i <= n; i++)
            //{
            //    for (k = n; k > i; k--)
            //        Console.Write("@");
            //    for (j = i; j >= 1; j--)
            //        if(j%2==0)
            //        Console.Write(j);//"*  "
            //    Console.WriteLine();
            //}



            //int i, j;
            //for (i = 1; i <= 5; i++)
            //{
            //    for (j = 1; j <= 5; j++)
            //    {
            //        Console.Write(i * j );
            //    }
            //    Console.WriteLine();
            //}

            //int i, j;
            //for (i = 1; i <= 5; i++)
            //{
            //    for (j = 1; j <= 5; j++)
            //    {
            //        Console.Write(j);
            //        Console.Write("%");
            //        Console.Write(i);
            //        //if (j % 2 != 0)
            //        //{
            //        //    Console.Write(j);
            //        //}
            //        //else
            //        //{
            //        //    Console.Write(i);
            //        //}
            //    }
            //    Console.WriteLine();
            //}


            //-------------------1---------------------------------
            //int i, j, n=5;
            //for (i = 1; i <= n; i++)
            //{
            //    for (j = 1; j<= i; j++)
            //or for (j = i; j >= 1; j--)
            //    {
            //        Console.Write("*");
            //    }
            //    Console.WriteLine();
            //}

            //---------------2-------------------------------------------
            //int i, j, n = 5;
            //for (i = 1; i <= n; i++)
            //{
            //    Console.Write("-");
            //    for (j = n-1; j >= 1; j--)
            //    {
            //       Console.Write("@");
            //    }
            //    for (j = 1; j <= i; j++)
            //    {
            //        console.write("*");
            //    }
            //    Console.WriteLine();
            //}

            //--------------------3---------------------------------------------

            //    int i, j, n=5;
            //  for(i=1;i<=n;i++)
            //  {
            //    for(j=n;j>=i;j--)
            //    {
            //        Console.Write("*");
            //    }

            //    Console.WriteLine();
            //}

            //----------------------4---------------------------------------
            //-****
            //-!***
            //-!!**
            //-!!!*
            //-!!!!

            //int i, j, n = 5;
            //for (i = 1; i <= n; i++)
            //{
            //    Console.Write("-");
            //    for (j = 2; j <= i; j++)
            //    {
            //        Console.Write("!");
            //    }
            //    for (j = n - 1; j >= i; j--)
            //    {
            //        Console.Write("*");
            //    }

            //    Console.WriteLine();
            //}

            //------------------5----------------------------

            //    *
            //   * *
            //  * * *
            // * * * *
            //* * * * *
            // * * * *
            //  * * *
            //   * *
            //    *

            //int i, j, n=5;
            //for(i=1;i<=n;i++)
            //{
            //    Console.Write("@");
            //    for (j = n-1; j >= i; j--)
            //    {
            //        Console.Write(" ");
            //    }
            //        for (j=1;j<=i;j++)
            //        {
            //            Console.Write("* ");
            //        }
            //    Console.WriteLine();
            //}
            //for (i = 1; i <= n; i++)
            //{
            //    Console.Write("@");
            //    for (j = 1; j <= i; j++)
            //    {
            //        Console.Write(" ");
            //    }
            //    for (j = n-1; j >= i; j--)
            //    {
            //        Console.Write("* ");
            //    }
            //    Console.WriteLine();
            //}

            //-----------------6--------------------------------
            // *
            //***
            // *
            //***
            // *
            //***
            // *
            //***
            // *


            //int i, j, n = 9;
            //for (i = 1; i <= n; i++)
            //{

            //    if (i % 2 == 0)
            //    {
            //        for (j = 1; j <= 3; j++)
            //        {
            //            Console.Write("*");
            //        }

            //    }
            //    else
            //    {
            //        Console.Write(" ");
            //        for (j = 1; j <= 1; j++)
            //        {
            //            Console.Write("*");
            //        }
            //    }
            //    Console.WriteLine();
            //}



            //---------------------------7----------------------------------
            //* * * * *
            //*       *
            //*       *
            //*       *
            //* * * * *
            //int i, j,n=5;
            //for (i = 1; i <= n; i++)
            //{
            //    for (j = 1; j <= n; j++)
            //    {
            //        //Console.Write("-");
            //        if (j == 1 || j == n || i==1||i==n )
            //        {
            //            Console.Write("* ");
            //        }

            //        else
            //        {
            //            Console.Write("  ");
            //        }
            //    }
            //    Console.WriteLine();
            //}


            //--------------8------------------------------------
            //int i, j, n = 5;
            //for (i=0;i<=n;i++)
            //{
            //    for (j = 0; j <= n*2; j++)
            //    {  

            //        if ((j==n+i)||(j==n-i)||i==n )
            //        {
            //            Console.Write("* ");
            //        }

            //        else
            //        {
            //            Console.Write("  ");

            //        } 


            //    }
            //    Console.WriteLine();
            //}

            //----------------------------------------------9---------------------------------
            //    *
            //   ***
            //  *****
            // *******
            //*********
            //int i, j, n = 5;
            // for (i = 0; i <= n; i++)
            // {
            //     for (j = 0; j <= n * 2; j++)
            //     {

            //         if ((j >= n +1- i) && (j <=n -1+ i) )
            //         {
            //             Console.Write("*");
            //         }

            //         else
            //         {
            //             Console.Write(" ");

            //         } 
            //    }
            //    Console.WriteLine();
            //}

            //--------------------10----------------------------------
            // *!!!!!*
            // !*!!!*!
            // !!*!*!!
            // !!!*!!!
            // !!*!*!!
            // !*!!!*!
            // *!!!!!*
            //            int i, j, n = 7;
            //for (i = 1; i <= n; i++)
            //{
            //    for (j = 1; j <= n ; j++)
            //    {

            //        if (j == i|| j== n+1-i)
            //        {
            //            Console.Write("* ");
            //        }

            //        else
            //        {
            //            Console.Write("! ");

            //        }
            //    }
            //    Console.WriteLine();
            //}
 //------------------------11-----------------------------------------
                                   
            //int i, j, n = 7;
            //for (i = 1; i <= n; i++)
            //{
            //    for (j = 1; j <= n; j++)
            //    {

            //        if (j == i || j == n + 1 - i||i==1||j==1||i==n||j==n)
            //        {
            //            Console.Write("* ");
            //        }

            //        else
            //        {
            //            Console.Write("  ");

            //        }
            //    }
            //      Console.WriteLine();
            //}





        }

    }
}
