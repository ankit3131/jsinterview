const orders = [
    {
        id: 1,
        customer: "Ankit",
        amount: 5000,
        status: "completed"
    },
    {
        id: 2,
        customer: "Rahul",
        amount: 3000,
        status: "pending"
    },
    {
        id: 3,
        customer: "Amit",
        amount: 7000,
        status: "completed"
    },
    {
        id: 4,
        customer: "Raj",
        amount: 2000,
        status: "cancelled"
    }
];
let obj = [];
let values = [];
let count = 0;
orders.forEach((value) => {
if(value.status === "completed") {
 obj.push(value);
values.push(value.customer);
count = value.amount + count;
}
})

console.log(obj);
console.log(count);
console.log(values);
