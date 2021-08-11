let salary = {
  BS: 480000,
  DA: 48000,
  HRA: 96000,
  CA: 12000,
  EA: 12000,
  MI: 12000,
  IT: 50000,
  PF: 57600,
}
console.log(salary)
const { BS, DA, HRA, CA, EA, MI } = salary
let grossSalary = BS + DA + HRA + CA + EA + MI
window.alert('Gross Salary Is :' + grossSalary)
