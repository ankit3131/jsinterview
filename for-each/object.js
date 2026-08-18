   let users = [
    {
        city:"Noida",name:"Ankit"
    },
    {
         city:"Delhi",name:"Rahul"
    },
    {
      city:"Noida" , name:"Arun"
    }
]
let obj = {}
users.forEach((value) => {
    debugger;
    if(!obj[value.city]) {
        debugger;
    obj[value.city] = [];
    }
    
        obj[value.city].push(value.name);
    
   
})
 console.log(obj);

//  output:- { Noida: [ 'Ankit', 'Arun' ], Delhi: [ 'Rahul' ] }