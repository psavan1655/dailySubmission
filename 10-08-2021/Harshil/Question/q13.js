const no = 3;
const no1 = 5;

let min = (no > no1) ? no : no1;

while (true) {
    if (min % no == 0 && min % no1 == 0) {
         console.log(`The LCM of ${no} and ${no1} is ${min}`);
                break;
    }
    min++
}