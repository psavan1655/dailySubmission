let square = (n) => {
  for (let i = 1; i <=n; i++) {
    for (let j = 1; j <=n; j++) {
        if(i==1 || i==n || j==1 || j==n){
            process.stdout.write("*");
        }
        else
        {
            process.stdout.write(" ");
        }
        
    }
    process.stdout.write("\n");
  }
};
square(8);
