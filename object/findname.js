function employes(object) {
    let obj = [];
    for(let i=0;i<object.length;i++) {
        if(object[i].name === "rahul") {
            obj.push(object[i].name)
        }
    }
    return obj;
}
let employees = employes([
    {name:"ankit" , age:25},
    {name:"rahul" , age:30},
    {name: "abhishek" , age:32}
])
console.log(employees);

// output:'rahul'

