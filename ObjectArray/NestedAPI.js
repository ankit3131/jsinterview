const data = [
    {
        user: {
            id: 1,
            name: "Ankit"
        },
        orders: [
            { id: 101, amount: 5000 },
            { id: 102, amount: 3000 }
        ]
    },
    {
        user: {
            id: 2,
            name: "Rahul"
        },
        orders: [
            { id: 103, amount: 7000 }
        ]
    }
];

let user = data.map((order) => {
    // let totalorder = 0
    let amount = 0;
    for(let i=0;i<order.orders.length;i++) {
        amount += order.orders[i].amount;
        // totalorder++;  
        // console.log(order.orders);
    }
    return {
        name:order.user.name,
        totalOrders:order.orders.length,
        totalAmount:amount
    }
    // console.log(totalorder)
    // console.log(amount)
})
console.log(user);
// output [
//     {
//         name: "Ankit",
//         totalOrders: 2,
//         totalAmount: 8000
//     },
//     {
//         name: "Rahul",
//         totalOrders: 1,
//         totalAmount: 7000
//     }
// ]

// step:-2
const data = [
    {
        user: {
            id: 1,
            name: "Ankit"
        },
        orders: [
            { id: 101, amount: 5000 },
            { id: 102, amount: 3000 }
        ]
    },
    {
        user: {
            id: 2,
            name: "Rahul"
        },
        orders: [
            { id: 103, amount: 7000 }
        ]
    }
];

let user = data.map((order) => {
    // let totalorder = 0
    let amount = 0;
    for(let i=0;i<order.orders.length;i++) {
        amount += order.orders[i].amount;
        // totalorder++;  
        // console.log(order.orders);
    }
    return {
        name:order.user.name,
        totalOrders:order.orders.length,
        totalAmount:amount
    }
    // console.log(totalorder)
    // console.log(amount)
})
console.log(user);
