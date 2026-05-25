    let users = [
    {name:"Ankit"},
    {name:"Rahul"}
    ];
    let role = [
        {role:'Developer'},
        {role:'Developer'}
    ]
  
  let arr = users.map((item , index) => {
    return {
    users: item.name,
    role: role[index].role
  }
  })
  
    console.log(arr);
    // output:-
    // [
    //  {name:"Ankit", role:"Developer"},
    //  {name:"Rahul", role:"Developer"}
    // ]

