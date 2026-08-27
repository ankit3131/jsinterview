// step:1
// const users = [
//     { name: "Ankit", age: 24 },
//     { name: "Rahul", age: 17 },
//     { name: "Amit", age: 30 }
// ];

// let arr = users.map((user) => {
//     let obj = {};
//     if(user.age >=18) {
//         obj = user;
//         obj["isAdult"] = true;
//     }
//     else {
//           obj = user;
//         obj["isAdult"] = false;
//     }   
//     return obj; // return user;
// })
// console.log(arr);

// /////////////////////// output use [
//     { name: "Ankit", age: 24, isAdult: true },
//     { name: "Rahul", age: 17, isAdult: false },
//     { name: "Amit", age: 30, isAdult: true }
// ]



// step:-2
const users = [
    { name: "Ankit", age: 24 },
    { name: "Rahul", age: 17 },
    { name: "Amit", age: 30 }
];
let arr = users.map((user) => {
if(user.age > 18)
 {
    user["isAdult"] = true;
}

else {
    user["isAdult"] = false;
}
return user;
})
console.log(arr);
// /////////////////////// output use [
//     { name: "Ankit", age: 24, isAdult: true },
//     { name: "Rahul", age: 17, isAdult: false },
//     { name: "Amit", age: 30, isAdult: true }
// ]