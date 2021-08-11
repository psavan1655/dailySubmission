// 33- Find LCM of two Numbers
const LCM = (n1,n2) => {
    let min = n1 > n2 ? n1 : n2;
    while (true)
    {
        if(min % n1 === 0 && min % n2 === 0) {
            console.log(`The LCM of ${n1} and ${n2} is : ${min}`);
            break;
        }
    min++
    }
}

LCM(10, 15)