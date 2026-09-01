// setp:1


const data = [
    { name: "Ankit", city: "Noida" },
    { name: "Rahul", city: "Delhi" },
    { name: "Amit", city: "Noida" },
    { name: "Raj", city: "Delhi" }
];

let obj = data.reduce((accum , element) => {
if(!accum[element.city]) {
    accum[element.city] = [];
    accum[element.city].push(element.name);
}
else {
    accum[element.city].push(element.name);
}
return accum;
} , {})
console.log(obj);
// step:-2

// function user(users) {
//      let obj = {};
// for(let i=0;i<users.length;i++) {
   
//     if(!obj[users[i].city]) {
//         obj[users[i].city] = [];
//         obj[users[i].city].push(users[i].name);
//     }
//     else {
//         obj[users[i].city].push(users[i].name);
//     }
    
// }
// return obj;
// }

// const data = [
//     { name: "Ankit", city: "Noida" },
//     { name: "Rahul", city: "Delhi" },
//     { name: "Amit", city: "Noida" },
//     { name: "Raj", city: "Delhi" }
// ];

// console.log(user(data))