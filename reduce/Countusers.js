// step:1
const users = [
    { name: "Ankit", role: "developer" },
    { name: "Rahul", role: "designer" },
    { name: "Amit", role: "developer" },
    { name: "Raj", role: "manager" },
    { name: "Vikas", role: "developer" }
];
let count = users.reduce((accum , value) => {
    debugger;
if(!value['role']) {
    value['role'] = accum;
}
else {
    value['role'] += accum;
}
return value;
},1)
console.log(count);

// output:-{ developer: 3, designer: 1, manager: 1 }

// step:-2
// const users = [
//     { name: "Ankit", role: "developer" },
//     { name: "Rahul", role: "designer" },
//     { name: "Amit", role: "developer" },
//     { name: "Raj", role: "manager" },
//     { name: "Vikas", role: "developer" }
// ];
// let obj = {};
// let use = users.map((value) => {
//     debugger;
// if(!obj[value.role]) {
//     obj[value.role] = 1;
// }
// else {
//     obj[value.role]++;
// }
// return obj;
// })
// console.log(obj);

// output:- use in map{ developer: 3, designer: 1, manager: 1 }