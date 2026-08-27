const user = [
    {
        name: "Ankit" , age:24
    },
    {
        name: "Rahul" , age: 40
    },
    {
        name: "Amit" , age:25
    }
]
let arr = user.find((user) => {
return (
    user.name === "Rahul",
    user.name === "Amit" 
)
})
console.log(arr);

// output:-    {
    //     name: "Rahul" , age: 40
    // },

let arr1 = user.findIndex((user) => {
    return (
        user.name === "Amit"
    )
}) 
console.log(arr1);