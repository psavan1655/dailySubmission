let str = "mayur paremar";
let newstr = "";
for (let i = 0; i < str.length; i++) {
  switch (str.charAt(i)) {
    case "a": {
      newstr = str.replaceAll("a", "");
      break;
    }
    case "e": {
      newstr = str.replace("e", "");
      break;
    }
    case "i": {
      newstr = str.replace("i", "");
      break;
    }
    case "o": {
      newstr = str.replace("o", "");
      break;
    }
    case "u": {
      newstr = str.replace("u", "");
      break;
    }
    case "A": {
      newstr = str.replace("A", "");
      break;
    }
    case "E": {
      newstr = str.replace("E", "");
      break;
    }
    case "I": {
      newstr = str.replace("I", "");
      break;
    }
    case "U": {
      newstr = str.replace("U", "");
      break;
    }
    case "O": {
      newstr = str.replace("O", "");
      break;
    }
  }
}

console.log(newstr);
