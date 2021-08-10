let m = Math.round(Math.random() * 1000000000000);

let str = String(m);
let newstr = "";

for (let i = 0; i < str.length; i++) {
  if (i == 3) {
    newstr = newstr + ".";
  }
  if (i == 6) {
    newstr = newstr + ".";
  }
  if (i == 9) {
    newstr = newstr + ".";
  }
  newstr = newstr + str.charAt(i);
}

console.log(newstr);
