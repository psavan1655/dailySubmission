// Gross Salary = Basic + Da + Hra + Ma.
// Deduction = Gross Salary - Pf - Pt - It.
// Net Salary = Gross Salary - Deduction.
let basic = 4000;
let da = 200;
let hra = 100;
let ma = 10;

let GrossSalary = basic + da + hra + ma;
console.log(GrossSalary);

let pf = 300;
let pt = 400;
let it = 400;

let deduction = GrossSalary - pf - pt - it;
console.log(deduction);

let netSalary = GrossSalary - deduction;

console.log(netSalary);
