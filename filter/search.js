// step:-1
// const user = [
//     {
//         name: "Ankit" , skills:["React","Javascript"]
//     },
//     {
//         name: "Rahul" , skills:["Java","Javascript"]
//     },
//      {
//         name: "Amit" , skills:["React","Javascript"]
//     },
// ]

// let arr = user.filter((users) => {
//     if(users.skills[0] === "React") {
// return users;
//     }
// })
// let arr1 = arr.map((user1) => {
// return user1.name;
// })
// console.log(arr1);

// output:- ["Ankit","Amit" ]

// step:2
const user = [
    {
        name: "Ankit" , skills:["React","Javascript"]
    },
    {
        name: "Rahul" , skills:["Java","Javascript"]
    },
     {
        name: "Amit" , skills:["React","Javascript"]
    },
]
let arr = user.filter((users) => users.skills.includes("React"))
.map((users) => users.name);

console.log(arr);
// output:- ["Ankit","Amit" ]