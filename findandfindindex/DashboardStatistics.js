const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 8000 },
    { id: 4, type: "debit", amount: 1000 },
    { id: 5, type: "credit", amount: 3000 }
];

let arr = transactions.filter((user) => user.type === "credit");

let filter = arr.map((user) => {
    return {
        id:user.id,
        amount:user.amount
    }
})

let find = filter.find((user) => {
return (
user.amount >= 7000
)
}
)
console.log(arr);
console.log(filter);
console.log(find);
// Get all credit transactions.
// Display only their IDs and amounts.
// Find the first credit transaction greater than 7000.

