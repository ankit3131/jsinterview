// bind method diffrence argument passed to array like this.

// const user = {
//     name: "Ankit"
// };

// function showDetails(city , role) {
//         console.log(this.name , city , role)

// }

// showDetails.apply(user , ["Noida" , "Frontend developer"])

// output:- Ankit Noida Frontend developer

// const employe = {
//     name: "Rahul",
//     salary: 80000
// }
// let count = employe.salary*(15/100)
// console.log(`${employe.name} ${count}`);

// Rahul 12000

// const employe1 = {
//     name:"Ankit",
//     salary:45000
// }

// const employe2= {
//     name:"Rahul",
//     salary:80000
// }
// function alldetails(per) {
//     let total = this.salary*(per/100)
// console.log(this.name , total);
// }
// alldetails.apply(employe1 , [15])
// alldetails.apply(employe2 , [15])

// output:-
// Ankit 4500
// Rahul 12000

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const prices = data.products.map((value) => value.price)
    const highest = Math.max.apply(null , prices)
    const lowest = Math.min.apply(null , prices)

  console.log("Highest price:", highest);
  console.log("Lowest price:", lowest);
}

getProducts();
// highest apply