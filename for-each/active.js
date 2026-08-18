    let activeEmployees = [];
    let totalActiveSalary = 0;
    let higestPaid = null;
const processEmployees = (employe) => {
    if(employe.active === true) {
activeEmployees.push(employe);
    }
//        if(employe.salary === 50000 && employe.active === true) {
// higestPaid.push(employe);
//     }
    if(higestPaid === null || employe.salary > higestPaid.salary && employe.active === true) {
        higestPaid = employe;
    }
    totalActiveSalary += totalActiveSalary + employe.salary;
//     if(employe.salary) {
// higestPaid.push();
//     }
}
const employees = [
{id:1 , name: "Ankit" , department: "IT" , salary:45000, active: true},
{id:2 , name: "Rahul" , department: "HR" , salary:35000, active: true},
{id:3 , name: "Amit" , department: "IT" , salary:60000, active: false},
{id:4 , name: "Raj" , department: "Sales" , salary:50000, active: false},
{id:5 , name: "Neha" , department: "Sales" , salary:50000, active: true},
]
employees.forEach(processEmployees);
console.log(activeEmployees);
console.log(totalActiveSalary);
console.log(higestPaid);
