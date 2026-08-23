// const products = [
//     { name: "Laptop", price: 50000, stock: 5 },
//     { name: "Mobile", price: 20000, stock: 0 },
//     { name: "Mouse", price: 1000, stock: 10 }
// ];
// let arr = products.map((user) => {
//     let obj = {};
// if(user.stock > 0) {
//     // obj = user;
//     obj.name = user.name;
//     obj.price = user.price;
//     obj['status'] = "Available"

// }
// else {
//   obj.name = user.name;
//     obj.price = user.price;
//     obj['status'] = "Out of stock"
// }
// return obj;
// })
// console.log(arr)

//////////////output:-
// [
//     {
//         name: "Laptop",
//         price: "₹50000",
//         status: "Available"
//     },
//     {
//         name: "Mobile",
//         price: "₹20000",
//         status: "Out of Stock"
//     },
//     {
//         name: "Mouse",
//         price: "₹1000",
//         status: "Available"
//     }
// ]

// step:-2
const products = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Mobile", price: 20000, stock: 0 },
    { name: "Mouse", price: 1000, stock: 10 }
];

let arr = products.map((user) => {
return {
    name:user.name,
    price:user.price,
    status: user.stock ? "Available" : "Out of Stock"
}
})

console.log(arr);