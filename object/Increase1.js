function employes(obj){
    let obj1 = []
for(let i=0;i<obj.length;i++) {
    obj1.push({
     name:obj[i].name,
     age:obj[i].age+1   
    })
    // obj1[obj[i].name] = obj[i].age+1;
}

return obj1;
}
let employees = employes([
    {name:'ankit' , age:25} , 
    {name:'rahul' , age:26} ,
    {name:'manyank' , age:27}
])
console.log(employees)