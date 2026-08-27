// const orders = [
//     { id: 101, customer: "Ankit", amount: 5000, status: "completed" },
//     { id: 102, customer: "Rahul", amount: 2000, status: "pending" },
//     { id: 103, customer: "Amit", amount: 8000, status: "completed" },
//     { id: 104, customer: "Raj", amount: 1000, status: "cancelled" }
// ];
// let arr = orders.filter((user) => user.amount >= 5000 && user.status === "completed").
// map((neworder) => {
// return {
// id : neworder.id,
// customerName : neworder.customer,
// total : neworder.amount
// }
// })
// console.log(arr);

// output:-
// [
//     {
//         orderId: 101,
//         customerName: "Ankit",
//         total: 5000
//     },
//     {
//         orderId: 103,
//         customerName: "Amit",
//         total: 8000
//     }
// ]

// step:-2

const orders = [
    { id: 101, customer: "Ankit", amount: 5000, status: "completed" },
    { id: 102, customer: "Rahul", amount: 2000, status: "pending" },
    { id: 103, customer: "Amit", amount: 8000, status: "completed" },
    { id: 104, customer: "Raj", amount: 1000, status: "cancelled" }
];
let arr = orders.filter((user) => {
    if(user.amount >= 5000 && user.status === "completed") {
        return user;
    }
})
let arr1 = arr.map((user) => {
    let obj = {};
    obj['id'] = user.id;
    obj["customerName"] = user.customer,
    obj['amount'] = user.amount
    return obj;
})
console.log(arr1);

// output:-
// [
//     {
//         orderId: 101,
//         customerName: "Ankit",
//         total: 5000
//     },
//     {
//         orderId: 103,
//         customerName: "Amit",
//         total: 8000
//     }
// ]
