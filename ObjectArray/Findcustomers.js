const orders = [
    {
        id: 101,
        customer: "Ankit",
        items: [
            { name: "Laptop", price: 50000 },
            { name: "Mouse", price: 1000 }
        ]
    },
    {
        id: 102,
        customer: "Rahul",
        items: [
            { name: "Mobile", price: 20000 }
        ]
    },
    {
        id: 103,
        customer: "Amit",
        items: [
            { name: "Laptop", price: 45000 }
        ]
    }
];
let arr = [];
let name = orders.map((user) => {
for(let i=0;i<user.items.length;i++) {
    if(user.items[i].name === "Laptop") {
arr.push(user.customer)
    }
}
})
console.log(arr);
// ["Ankit", "Amit"]