const employees = [
    { name: "Ankit" , department: "IT" , salary: 40000},
    { name: "Rahul" , department: "HR" , salary: 60000},
    { name: "Amit" , department: "IT" , salary: 70000},
    { name: "Raj" , department: "IT" , salary: 50000}
]
let arr = employees.filter((user) => {
return user.department === "IT"
}).find((user) => user.salary>60000)
console.log(arr);

// find:-IT
// output:- { name: "Amit" , department: "IT" , salary: 70000},