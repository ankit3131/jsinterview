const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Mobile", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" }
];
let obj = {};
for(let i=0;i<products.length;i++) {
    // obj = [];
    if(!obj[products[i].category]) {
        obj[products[i].category] = [];
    }
     obj[products[i].category].push(products[i].name)
}
console.log(obj);

// output:-
// {
//     electronics: ["Laptop", "Mobile"],
//     clothing: ["Shirt", "Jeans"]
// }