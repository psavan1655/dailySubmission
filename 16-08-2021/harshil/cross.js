let n=5;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(i==j || j==(n-i+1))  
        {
            process.stdout.write("* ");
        }
        else
        {
            process.stdout.write("  ");
        }
    }
    process.stdout.write("\n");
}