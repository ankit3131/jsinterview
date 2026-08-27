let users = [
    {id:1, name:"Ankit" , active:false},
    {id:2, name:"Rahul" , active:true},
    {id:3, name:"Amit" , active:true},
]
let arr = users.filter((user) => user.active === true);
console.log(arr);
// outpu:-1
// output:-    {id:3, name:"Amit" , active:true},
    // {id:4, name:"Arun" , active:true},