let products = [
    {
    id:1,
    name: "laptop",
    catgery: "electronics",
    price:50000,
    stock:5
},
   {
    id:2,
    name: "Mobile",
    catgery: "electronics",
    price:30000,
    stock:0
},
   {
    id:3,
    name: "Monitor",
    catgery: "electronics",
    price:15000,
    stock:3
},
 {
    id:4,
    name: "Mouse",
    catgery: "electronics",
    price:1000,
    stock:10
},
   {
    id:5,
    name: "T-shirt",
    catgery: "clothing",
    price:1500,
    stock:10
},
]
let arr1 = [];
let arr = products.filter((user) => user.catgery === "electronics")
.find((user) => (user.price > 5000))

arr1.push(arr);
let all = arr1.map((user) => (
    {
id:user.id,
name:user.name,
price:user.price
    }
))
console.log(all);
// final output:-
// {
//     id:1,
//     name: "Laptop",
//     price: 50000
// }