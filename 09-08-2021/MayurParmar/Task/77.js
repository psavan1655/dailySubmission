// Find highest frequency character in a string
let str = "Mayur MayurParmar Parmar";
let arr = str.split(" ");
let l = 0;
let element = "";
for (data of arr) {
  let s = String(data);
  if (l < s.length) {
    l = s.length;
    element = data;
  }
}
console.log("highest frequency character in a string: " + element);
