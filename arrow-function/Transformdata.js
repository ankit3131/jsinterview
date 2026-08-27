let user = (data) => {

let string = "fullname"
let result = [];
for(let i=0;i<data.length;i++) {
    let obj1 = {};
    obj1[string] =  data[i].firstname + " " + data[i].lastname;
    // console.log(data[i])
    result.push(obj1);
}

return result;
}

let users = [
    {
        firstname : "Ankit" , lastname : "Kumar"
    },
    {
 firstname : "Rahul" , lastname : "Sharma"
    }
]
console.log(user(users));