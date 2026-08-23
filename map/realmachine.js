// const orders = [
//     {
//         id: 101,
//         customer: "Ankit",
//         items: 3,
//         price: 500
//     },
//     {
//         id: 102,
//         customer: "Rahul",
//         items: 2,
//         price: 1000
//     },
//     {
//         id: 103,
//         customer: "Amit",
//         items: 5,
//         price: 200
//     }
// ];
// let arr = orders.map((user) => {
// let obj = {
//     orderId:user.id,
//     customerName:user.customer,
//     total:Number(user.items * user.price)
// }

// return obj;
// })
// console.log(arr);

// output:-
//  [
//     {
//         orderId: 101,
//         customerName: "Ankit",
//         total: 1500
//     },
//     {
//         orderId: 102,
//         customerName: "Rahul",
//         total: 2000
//     },
//     {
//         orderId: 103,
//         customerName: "Amit",
//         total: 1000
//     }
// ]

// step:-2
// const orders = [
//     {
//         id: 101,
//         customer: "Ankit",
//         items: 3,
//         price: 500
//     },
//     {
//         id: 102,
//         customer: "Rahul",
//         items: 2,
//         price: 1000
//     },
//     {
//         id: 103,
//         customer: "Amit",
//         items: 5,
//         price: 200
//     }
// ];
// let arr = orders.map((user) => {
// return {
//     orderId:user.id,
//     customName:user.customer,
//     total:user.items * user.price
// }
// })
// console.log(arr);
// output:-
//  [
//     {
//         orderId: 101,
//         customerName: "Ankit",
//         total: 1500
//     },
//     {
//         orderId: 102,
//         customerName: "Rahul",
//         total: 2000
//     },
//     {
//         orderId: 103,
//         customerName: "Amit",
//         total: 1000
//     }
// ]

// step:-3

const orders = [
    {
        id: 101,
        customer: "Ankit",
        items: 3,
        price: 500
    },
    {
        id: 102,
        customer: "Rahul",
        items: 2,
        price: 1000
    },
    {
        id: 103,
        customer: "Amit",
        items: 5,
        price: 200
    }
];

let user = orders.map((user) => (
    {
        id : user.id,
        customerName : user.customer,
        total: user.items * user.price
    }
)

)
console.log(user);
// output:-
//  [
//     {
//         orderId: 101,
//         customerName: "Ankit",
//         total: 1500
//     },
//     {
//         orderId: 102,
//         customerName: "Rahul",
//         total: 2000
//     },
//     {
//         orderId: 103,
//         customerName: "Amit",
//         total: 1000
//     }
// ]