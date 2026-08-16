let remove = (users , result) => {
  
   if(!result.includes(users)) {
    result.push(users)
   }
  
}

let array = (users , callback) =>  {
     let result = [];
    for(let i=0;i<users.length;i++) {
        callback(users[i] , result);
       
    }
     return result;
}
const numbers = [10,20,10,10,40];
console.log(array(numbers , remove))

// remove value use output :- [ 10, 20, 40 ] 