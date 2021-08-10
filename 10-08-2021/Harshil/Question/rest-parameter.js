function sumAll(...params) {
    let sum = 0;
  
    for (let arg of params) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); 
  console.log( sumAll(1, 2) ); 
console.log( sumAll(1, 2, 3) ); 

let arr=[12,1,2,12,12,123,3,3];
let arr1 = [...arr];
console.log(arr1);