const users = [
    {name: "Ankit" , city:"Noida"},
     {name: "Rahul" , city:"Delhi"},
      {name: "Amit" , city:"Noida"},
       {name: "Raj" , city:"Delhi"},
]

users.forEach((user) => {
    let obj = {};
    if(!obj[user.city]) {
obj[user.city] = [];
    }
    else {
       obj[user.city].push(user.name);
    }
    console.log(obj)
}

)