let float_arr=[123.5,45.5,12.3,2.0,34.9,78.9];
for(let i=0;i<float_arr.length;i++)
{
    for(let j=0;j<float_arr.length;j++)
    {
        if(float_arr[j] > float_arr[j+1])
        {
            let temp = float_arr[j];
            float_arr[j]=float_arr[j+1];
            float_arr[j+1]=temp;
        }
    }
}

   console.log("Sorted Array is",float_arr);
