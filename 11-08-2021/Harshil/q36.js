    let  num=15937, temp, rem, sum = 0;  
   temp = num;  
    while(temp > 0)  
    {  
        rem  = temp % 10;  
        sum  = sum + rem;  
        temp = Math.floor(temp / 10);  
  
        if(temp == 0)  
        {  
            if(sum > 9)  
            {  
                temp = sum;  
                sum  = 0;  
            }  
        }  
    }
    console.log("Generic root of the Number is",sum);  
  