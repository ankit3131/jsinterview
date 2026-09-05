// step:1
const orders = [
    {
        id:101,
        customer: 'Ankit',
        items: [
            {name:'Laptop',price: 50000},
            {name: 'Mouse' , price:1000}
        ]
    },
    {
        id:102,
        customer:'Rahul',
        items: [
            {name: 'Mobile',price:20000}
        ]
    }
]
// let user = orders.map((value) => {
// let valuese = value.items.reduce((accum , value) =>  {
//     debugger;
//     return accum + value.price
//     },0)
//     return {
//         id:value.id,
//         customer:value.customer,
//         items:valuese
//     }
   
// } 

// )

// output:-   {
    //     id:101,
    //     customer: 'Ankit',
    //     items: 51000
    // },

      //     id:102,
    //     customer: 'Ankit',
    //     items: 20000
    // },
// console.log(user);

// step:-2
 function user(value) {
 let store = [];
    for(let i=0;i<value.length;i++) {
         let obj = {};
        debugger;
         let price = 0;

   for(let j=0;j<=value[i].items.length+1;j++) {
    debugger;
    const item = value[i].items[j]
    if(item === undefined) { 
        break;
    }
    price += value[i].items[j].price;
   }
   obj['id'] = value[i].id,
   obj['customer'] = value[i].customer,
   obj['items'] = price;
           store.push(obj);
      
}
  return store;
 
}

console.log(user(orders));
// output:-   {
    //     id:101,
    //     customer: 'Ankit',
    //     items: 51000
    // },

      //     id:102,
    //     customer: 'Ankit',
    //     items: 20000
    // },