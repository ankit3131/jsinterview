// const employees = [
//     { name: "Ankit", salary: 40000, active: true },
//     { name: "Rahul", salary: 60000, active: false },
//     { name: "Amit", salary: 70000, active: true },
//     { name: "Raj", salary: 30000, active: true }
// ];
// let money = 0;
// let obj = {};
// let names = [];
// let arr = employees.filter((user) => {

// if(user.salary > money && user.active === true) {
//     money = user.salary;
// obj = user.name;
// }
// return obj;
// })

// names.push(obj);
// console.log(names);

// output:- [ 'Amit' ];

////////////////// step:-2
// const employees = [
//     { name: "Ankit", salary: 40000, active: true },
//     { name: "Rahul", salary: 60000, active: false },
//     { name: "Amit", salary: 70000, active: true },
//     { name: "Raj", salary: 30000, active: true }
// ];

// let arr = employees.filter((user) => user.salary >= 70000 && user.active === true);
// let arr1 = arr.map((names) => {
//     return names.name;
// })
// console.log(arr1);

// output:- ['Amit]