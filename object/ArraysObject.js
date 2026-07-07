function employes(objects) {
    let keys = [];
    for(let i=0;i<objects.length;i++) {
        keys.push(objects[i].name)
    }
return keys;
}


let employees = [{ name: "Ankit" , age:40},
  { name: "Rahul", age: 30 },
  { name: "Amit", age: 20 }
]

let output = employes(employees);
console.log(output)

// output:- ['Ankit','Rahul','Amit']

// step:2
function employes(){

}
let employees = [{ name: "Ankit" , age:40},
  { name: "Rahul", age: 30 },
  { name: "Amit", age: 20 }
]

let output = employes(employees);
console.log(output)
