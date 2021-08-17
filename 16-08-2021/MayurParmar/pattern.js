let str = "";

for (i = 0; i < 5; i++) {
  for (k = 0; k < 5 - i; k++) {
    str = str + " ";
  }
  let num = 2;
  for (j = 0; j <= i * 2; j++) {
    if (j == 0) {
      str = str + "1";
    } else if (j == 1) {
      str = str + "2";
    } else {
      num = num + 1;
      str = str + num;
    }
  }
  str = str + "\n";
}
console.log(str);
