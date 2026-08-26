// const products = [
//     {
//         name: "Laptop" , price:50000, stock:0
//     },
    
//      {
//         name: "Mobile" , price:20000, stock:5
//     },  
//       {
//         name: "Monitor" , price:15000, stock:2
//     },  
// ]
// let arr = products.find((user) => {
//     let obj = {};
//     if(user.price > 0) {
//         return obj;
//     }
// })
// console.log(arr);


//output- { name: 'Mobile' , price: 2000 , stock: 5
// }

// step:-2
const products = [
    {
        name: "Laptop" , price:50000, stock:0
    },
    
     {
        name: "Mobile" , price:20000, stock:5
    },  
      {
        name: "Monitor" , price:15000, stock:2
    },  
]
let arr = products.find((user) => user.price > 0)
console.log(arr);
// output- { name: 'Mobile' , price: 2000 , stock: 5
// }
