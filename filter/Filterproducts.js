// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Monitor", price: 15000 }
// ];

// let arr = products.filter((user) => 
// {
//     if(user.price > 10000 && user.price < 30000) {
// return user;
//     }
// })
// console.log(arr);

// output:-
// [
//     { name: "Mobile", price: 20000 },
//     { name: "Monitor", price: 15000 }
// ]

// step:-2

// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Monitor", price: 15000 }
// ];

// let arr = products.filter((user) => user.price > 10000 && user.price < 30000);
// console.log(arr);

// output:-
// [
//     { name: "Mobile", price: 20000 },
//     { name: "Monitor", price: 15000 }
// ]


// step:-3
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "Monitor", price: 15000 }
];
let arr = products.filter((user) => {
    return user.price > 10000 && user.price < 30000
})
console.log(arr);
// output:-
// [
//     { name: "Mobile", price: 20000 },
//     { name: "Monitor", price: 15000 }
// ]
