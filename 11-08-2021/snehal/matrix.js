// 58 add two matrics

let a=[[1,2,3],[4,5,6],[7,8,0]];
let b=[[9,8,7],[6,5,4],[3,2,1]];
console.log(a);
console.log(b);

// 59 scale multiplication

for(i=0;i<3;i++)
{
    for(j=0;j<3;j++)
    {
        console.log("["+a[i][j]*3+"]");
    }
}


// 60 two matrix multiplication
for(i=0;i<3;i++)
{
    for(j=0;j<3;j++)
    {
     console.log("["+a[i][j]*b[i][j]+"]");
     }
}

// 61
c=[[1,1],[4,2]];
d=[[1,1],[2,5]];


 for(i=0;i<c.length;i++)
    {
    for(j=0;j<d.length;j++)
     {
        if(c[i][j]==d[i][j])
        {
        console.log('matrix are same');
        }
        else
        {
        console.log('matrix are not same');   
        }
    }
}

// 62 major digonal

 console.log(a[0][0]+a[1][1]+a[2][2]);
 console.log(b[0][0]+b[1][1]+b[2][2]);

//  63 minor digonal

console.log(a[0][2]+a[1][1]+a[2][0]);
console.log(b[0][2]+b[1][1]+b[2][0]);

// 64
// 65

// 66
let row=c[0][0]*c[1][1];
let col=c[0][1]*c[1][0];
console.log(row-col);


