const employees = [
    { name: "Ankit", salary: 40000 },
    { name: "Rahul", salary: 70000 },
    { name: "Amit", salary: 55000 }
];

let highest = employees.reduce((accum , value) => {
if(value.salary > accum.salary) {
accum = value.salary;
return value;
}
return value;
},0)
console.log(highest);

// output:-
// {
//     name: "Rahul",
//     salary: 70000
// }