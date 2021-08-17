
 let pattern = (n)=>{
    for(let i=1;i<=5;i++)
    {
        for(let j=1; j<=(2 * n-i); j++)
        {
            if(j>=i && j<=(2*n-i)){
                process.stdout.write("*");
            }
            else
            {
                process.stdout.write(" ");
            }   
        } 
        console.log();
    }
 }   
pattern(5);

