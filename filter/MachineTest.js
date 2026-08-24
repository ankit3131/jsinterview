//  const products = [
//     {
//         id: 1,
//         name: "Laptop",
//         category: "electronics",
//         price: 50000,
//         stock: 5
//     },
//     {
//         id: 2,
//         name: "T-Shirt",
//         category: "clothing",
//         price: 1000,
//         stock: 10
//     },
//     {
//         id: 3,
//         name: "Mobile",
//         category: "electronics",
//         price: 20000,
//         stock: 0
//     },
//     {
//         id: 4,
//         name: "Headphones",
//         category: "electronics",
//         price: 3000,
//         stock: 8
//     }
// ];

// let prices = 5000;
// let stokes = 0;
// let obj = {};
// let arr = products.filter((user) => {
    
// if(user.price > prices && user.stock > stokes) { 
//     debugger;
// prices = user.price;
// stokes = user.stock;
// obj = user;
// }
// // console.log(obj);
// return obj;
// })
// console.log(obj); 

// output:-
// [
//     {
//         id: 1,
//         name: "Laptop",
//         category: "electronics",
//         price: 50000,
//         stock: 5
//     }
// ]

// step:-2
const products = [
    {
        id: 1,
        name: "Laptop",
        category: "electronics",
        price: 50000,
        stock: 5
    },
    {
        id: 2,
        name: "T-Shirt",
        category: "clothing",
        price: 1000,
        stock: 10
    },
    {
        id: 3,
        name: "Mobile",
        category: "electronics",
        price: 20000,
        stock: 0
    },
    {
        id: 4,
        name: "Headphones",
        category: "electronics",
        price: 3000,
        stock: 8
    }
];

const category = "electronics"; 
const minPrice = 5000;

let arr = products.filter((user) => {
    return (
        user.category === "electronics" &&
        user.price >= 5000 &&
        user.stock >= 5
    )
    
})
console.log(arr);