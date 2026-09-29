let data = [
    {
    id:101,
    name:"Ankit",
items: [
    {name:"laptop",
        price: 50000, quantity:1
    },
    {price:1000,quantity:2}
]
},
    {
    id:102,
    name:"Rahul",
items: [
    {name:"laptop",
        price: 20000, quantity:1
    },
]
}

]

let arr = data.map((user) => {
let arr1 = user.items.reduce((accum , users) => {
   accum = accum + users.price * users.quantity;
   return accum;
},0)
return {
id:user.id,
price:arr1,
}
}
)
console.log(arr)

// output:-
// [ { id: 101, price: 52000 }, { id: 102, price: 20000 } ]