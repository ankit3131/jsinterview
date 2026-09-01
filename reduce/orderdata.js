const orders = [
    {
        id: 101,
        customer: "Ankit",
        status: "completed",
        items: [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 }
        ]
    },
    {
        id: 102,
        customer: "Rahul",
        status: "pending",
        items: [
            { name: "Mobile", price: 20000, quantity: 1 }
        ]
    },
    {
        id: 103,
        customer: "Amit",
        status: "completed",
        items: [
            { name: "Monitor", price: 15000, quantity: 2 }
        ]
    }
];

function user(user) {
    let obj = [];
    let result = [];
    let count = 0;
for(let i=0;i<user.length;i++) {
    debugger;
    if(user[i].status === "completed") {
        // obj[user[i].items] = [];
obj.push(user[i].items);
    }
   
}
for(let i=0;i<obj.length;i++) {
for(let j=0;j<obj[i].length;j++) {
result.push(obj[i][j])
}
}
for(let i=0;i<result.length;i++) {
    debugger;
    count += result[i].price * result[i].quantity;
    
}
return count;
}
console.log(user(orders));
//output:- 82000