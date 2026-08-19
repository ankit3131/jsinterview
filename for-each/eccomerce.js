let Availableproducts = [];
let Outofstock = [];
let totalValue = [];
let findmostexpensive = [];
let prices = null;
let count = 0;
let eccomerce = (arr) => {
    if(arr.stock > 0) {
Availableproducts.push(arr);
    }
     if (arr.stock === 0) {
Outofstock.push(arr);
    }
   totalValue.push(`${arr.name} = ${arr.price   *   arr.stock}`);

   if (arr.price > prices) {
prices = arr.price;
findmostexpensive = arr;
   }
count++;
}

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 25000, stock: 0 },
    { id: 3, name: "Shoes", category: "Fashion", price: 3000, stock: 10 },
    { id: 4, name: "Watch", category: "Fashion", price: 5000, stock: 2 },
    { id: 5, name: "Keyboard", category: "Electronics", price: 2000, stock: 0 }
];
products.forEach(eccomerce);

console.log("Availableproducts" , Availableproducts);
console.log("Outofstock" , Outofstock);
console.log("totalValue" , totalValue);
console.log(findmostexpensive);
console.log("count" , count);