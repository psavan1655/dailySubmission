<html>
// Javascript program for the above approach
 <body>
     <script>
function Solution(arr, n)
{
  
    // If length of array is even
     if (n % 2 == 0)
     {
       var z = n / 2;
       var e = arr[z];
       var q = arr[z - 1];
       var ans = (e + q) / 2;
       return ans;
     }
    
     // If length if array is odd
    else
     {
       var z = Math.floor(n / 2);
       return arr[z];
     }
}
 
// Driver Code  
// TODO Auto-generated method stub
var arr1 = [ 2, 3, 10, 26 ];
var arr2 = [ 1, 15, 17, 18, 21];
 
var i =  arr1.length;
var j =  arr2.length;
 
var l =  i+j;
// Merge two array into one array
const arr3 = arr1.concat(arr2);
 
// Sort the merged array
arr3.sort(function(a, b) {
  return a - b;
});
 
// calling the method
document.write("Median = " + Solution(arr3, l));
 
// This code is contributed by Shubham Singh
</script>
</body>
</html>
