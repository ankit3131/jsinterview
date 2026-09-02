const users = [
    {
        name: "Ankit" , age:24 ,city: "Noida"
    },
    {
        name: "Rahul" , age: 30 , city: "Delhi"
    },
    {
         name: "Amit" , age: 28 , city: "Noida"
    }
]

let user = users.filter((value) => {
    if(value.city === "Noida") {
    return value;
}
})
console.log(user);
let names = user.map((value) => {
    return value.name
})
console.log(names);
// output:-
// [
//     {
//         name: "Ankit" , age:24 ,city: "Noida"
//     },
//     {
//          name: "Amit" , age: 28 , city: "Noida"
//     }
// ]

// output:- ["Ankit" , "Amit"]