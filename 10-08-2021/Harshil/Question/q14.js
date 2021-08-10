let gdc = (a,b) => {
    if (b===0) {
        return a;
    }
    return gdc(b,a%b)
};
console.log(gdc(50, 20));
