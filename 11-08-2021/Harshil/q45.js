let arr = [12,34,56,78,32,45,12,90,98];
let filteritems = arr.filter((value,index)=>{
    return arr.indexOf(value) == index;
})
console.log(filteritems);