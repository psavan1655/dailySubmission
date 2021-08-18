for(let i=0;i<5;i++)
{
    for(let j=i;j<=5;j++)
    {
        process.stdout.write("*" + " ");
    }
    process.stdout.write("\n");
}
for(let i=0;i<5;i++)
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write("*" + " ");
    }
    process.stdout.write("\n");
}