// const employe1 = {
//     name:"Ankit",
// salary: 45000
// }
// const employe2 = {
//     name: "Rahul",
//     salary:55000
// }

// function user(percantage){
// let total = `${this.name} ${this.salary * percantage}`;
// console.log(total)
// }

// user.apply(employe1 , [10])
// user.apply(employe2 , [5])

// output:- 
// Ankit 450000
// Rahul 275000


const employe = {
    name: 'Deepak',
    salary: 60000
}

function calulation(percantage) {
const total = percantage / 100 * this.salary;
console.log(this.name , total)
}
calulation.apply(employe , [20])