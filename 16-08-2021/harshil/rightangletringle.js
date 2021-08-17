let n=5;
for(let i=0;i<=n;i++)
{
    for(let j=0;j<=n;j++)
    {
        if(j>=n-(i-1))
        {
            process.stdout.write(j.toString() + " ");
        }
        else
        {
            process.stdout.write("  ");
        }
    }
    process.stdout.write("\n");
}