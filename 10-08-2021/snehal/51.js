// 51 max,min in array
const arr = [40, 100, 1, 5, 25, 10];

console.log(Math.min.apply(null,arr));
console.log(Math.max.apply(null,arr));

// 52
count=0,cnt=0;
for(let i=0;i<arr.length;i++)
{
if(arr[i]%2==0)
{
    count++;
}
else{
    cnt++;
}
}
console.log('total even::'+count);
console.log('total odd:'+cnt);
