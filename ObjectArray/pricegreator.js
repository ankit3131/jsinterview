const products = [
    {name:'laptop',price:'50000'},
   {name:'laptop',price:'20000'},
   {name:'laptop',price:'1000'},
]
let user = products.find((user) => {
    if(user.price >= 10000) {
        return {
            name:user.name,
            price:user.price
        }
    }
})
console.log(user);