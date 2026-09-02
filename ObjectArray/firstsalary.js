// const employees = [
//     {name:'Ankit', department:'IT' , salary:4000},
//     {name:'Ankit', department:'HR' , salary:5000},
//     {name:'Ankit', department:'IT' , salary:70000},
//     {name:'Ankit', department:'IT' , salary:80000},
// ]
// let array = employees.find((user) => user.salary > 50000)
// console.log(array);
// output:-{name:'Ankit', department:'IT' , salary:70000},

// step:-2
function users(value) {
    let obj = [];
    for(let i=0;i<value.length;i++) {
        if(value[i].salary > 50000 && value[i].department === 'IT') {
            return (value[i]);
    }
}
}
const employees = [
    {name:'Ankit', department:'IT' , salary:4000},
    {name:'Ankit', department:'HR' , salary:5000},
    {name:'Ankit', department:'IT' , salary:70000},
    {name:'Ankit', department:'IT' , salary:30000},
]

console.log(users(employees))
// output:-{name:'Ankit', department:'IT' , salary:70000},