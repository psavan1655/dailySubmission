
let pattern = (n)=>{
   
    for(let i=1;i<=n;i++)
    {
        for(let j=1; j<=2 * n -1; j++)
        {
            if(j>=n-(i-1) && j<=n+(i-1)){
                process.stdout.write("* ");
            }
            else
            {
                process.stdout.write("  ");
            }    
        } 
        process.stdout.write("\n");
    }
}
pattern(5);

