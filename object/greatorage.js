function employes(object) {
let data = [];
for(let i=0;i<object.length;i++) {
    if(object[i].age >= 25){
        data.push(object[i])
    }
}
return data;
}

let employees = employes([
    {name:"ankit" , age:25},
    {name:"rahul" , age:30},
    {name:"arun",age:20}
])

console.log(employees);

///greatot than:2