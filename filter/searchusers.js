// const users = [
//     { name: "Ankit Kumar", city: "Noida" },
//     { name: "Rahul Sharma", city: "Delhi" },
//     { name: "Amit Kumar", city: "Noida" },
//     { name: "Raj Singh", city: "Mumbai" }
// ];

// let arr = users.filter((user) => {
//     if(user.name.includes('Kumar') && user.city === 'Noida') {

// return user;
//     }

// })
// console.log(arr);

// output:-
// [
//   { name: 'Ankit Kumar', city: 'Noida' },
//   { name: 'Amit Kumar', city: 'Noida' }
// ]

// step:-2

// const users = [
//     { name: "Ankit Kumar", city: "Noida" },
//     { name: "Rahul Sharma", city: "Delhi" },
//     { name: "Amit Kumar", city: "Noida" },
//     { name: "Raj Singh", city: "Mumbai" }
// ];

// let arr = users.filter((user) => user.name.includes('Kumar') && user.city === 'Noida');
// console.log(arr);

// output:-
// [
//   { name: 'Ankit Kumar', city: 'Noida' },
//   { name: 'Amit Kumar', city: 'Noida' }
// ]

// step:-3


const users = [
    { name: "Ankit Kumar", city: "Noida" },
    { name: "Rahul Sharma", city: "Delhi" },
    { name: "Amit Kumar", city: "Noida" },
    { name: "Raj Singh", city: "Mumbai" }
];
let arr = users.filter((user) => {
    // return {
        return user.name.includes('Kumar') && user.city === 'Noida'
    // }
})
console.log(arr);

// output:-
// [
//   { name: 'Ankit Kumar', city: 'Noida' },
//   { name: 'Amit Kumar', city: 'Noida' }
// ]