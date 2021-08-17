// for (let i = 1; i <=5;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         if(i == j)
//         {
//             process.stdout.write("* ");
//         }
//         else
//         {
//             process.stdout.write("  ");
//         }

//     }
//     process.stdout.write("\n");
// }
let n = 7;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || j == n + 1 - i) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  process.stdout.write("\n");
}
