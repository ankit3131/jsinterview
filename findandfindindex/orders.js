// const orders = [
//     {id:101,amounts:500,status:"completed"},
//         {id:102,amounts:1500,status:"pending"},

//             {id:103,amounts:2500,status:"completed"},

//                 {id:104,amounts:800,status:"completed"},

// ]

// let arr = orders.filter((user) => {
//    return ( 
//     user.amounts >= 1000 && user.status === "completed"
//    )
// })
// .map((user) => {
//    return {
// orderId: user.id,
// total: user.amounts
//    }
// })
// console.log(arr);
// output:-
// [
//     {
//          orderId:103,total: 2500
//     }
// ]

// step:-2

const orders = [
    {id:101,amounts:500,status:"completed"},
        {id:102,amounts:1500,status:"pending"},

            {id:103,amounts:2500,status:"completed"},

                {id:104,amounts:800,status:"completed"},

]

let arr = orders.filter((user) => (user.amounts >= 1000 && user.status === "completed"))
.map((user) => (
    {
orderId: user.id,
total: user.amounts
   }
))
console.log(arr);
