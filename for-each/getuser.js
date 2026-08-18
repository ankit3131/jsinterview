const users  = [
    {
        name:"Ankit",age:24
    },
     {
        name:"Rahul",age:30
    },
     {
        name:"Amit",age:28
    }
]

users.forEach((users) => {
    if(users.age > 25) {
console.log(users);
    }
    
})

// { name: 'Rahul', age: 30 }
// { name: 'Amit', age: 28 }