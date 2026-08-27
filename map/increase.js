/////step:-1
// const employees = [
//     {
//         name:'A',salary:30000
//     },
//     {
//         name:'B',salary:40000
//     },
//     {
//         name:'C' ,salary:50000
//     }
// ]
// let array = employees.map((user) => {
// return {
// name : user.name,
// salary: user.salary*10/100 + user.salary
// }
// })
// console.log(array);

// output:-[
//   { name: 'A', salary: 33000 },
//   { name: 'B', salary: 44000 },
//   { name: 'C', salary: 55000 }
// ]

/////step:2
const employees = [
    {
        name:'A',salary:30000
    },
    {
        name:'B',salary:40000
    },
    {
        name:'C' ,salary:50000
    }
]
let array = employees.map((user , index) => {
let obj = {};
// let keys = Object.keys(user);
// let value = Object.values(user);
// console.log(keys);
obj.name = user.name;
obj.salary = user.salary * 10/100 + user.salary;
return obj;
})
console.log(array);