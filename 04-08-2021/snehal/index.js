function work(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";  

  fir= firstInteger+ parseInt(secondInteger);
  deci=firstDecimal+  parseFloat(secondDecimal);
  str=firstString+secondString;

  return fir+"\n"+ deci+"\n"+str;
}
console.log(work(12, 4.32, "is the best place to learn and practice coding!,we get HackerRank is the best place to learn and practice coding! . "));


