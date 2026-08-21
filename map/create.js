const users = [
    {firstname : 'Ankit', lastname: 'Kumar'},
    {
        firstname: "Kumar" , lastname: "Sharma"
    }
]
let obj = users.map((arr) => {
return arr.firstname +' '+arr.lastname;
})
console.log(obj)