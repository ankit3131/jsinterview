const employees = [
    { id: 1, name: "Ankit", department: "IT", salary: 45000, active: true },
    { id: 2, name: "Rahul", department: "HR", salary: 55000, active: false },
    { id: 3, name: "Amit", department: "IT", salary: 70000, active: true },
    { id: 4, name: "Raj", department: "Finance", salary: 60000, active: true },
    { id: 5, name: "Vikas", department: "IT", salary: 30000, active: false }
];

let arr = employees.filter((user) => {
    return (
        user.active === true && user.department === "IT"
    )
}).map((user) => {
    return {
name:user.name,
salary:user.salary
    } 
}).find((user) => {
    return (
        user.salary > 60000
    )
})
console.log(arr);
// Requirements
// Get all active employees.
// From those employees, get employees from the IT department.
// Return only their names and salaries.
// Find the first employee whose salary is greater than 60000.

// output:-
// {
//     name: "Amit",
//     salary: 70000
// }