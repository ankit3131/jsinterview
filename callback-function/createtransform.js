let array = (users) => {
    let key = "fullname";
let name = {}
name[key] = users.firstname + ' ' + users.lastname;
return name;
}
let myObj = (users , callback) => {
    let result = [];
    let key = 'fullname';
    for(let i=0;i<users.length;i++) {
        let names = callback(users[i]);
        result.push(names);
   
}
 return result;
}
const users = [
    {
        firstname : 'Ankit',
        lastname : 'Kumar'
    },
    {
        firstname: 'Anjul',
        lastname : 'Rani'
    }
]
console.log(myObj(users,array));
//output:-[ 
// {fullname: 'Ankit kumar'},
// {fullname:'Rahul Kumar'}
// ]