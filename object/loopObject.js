///////////step:1

// let user = {
//   name: "Ankit",
//   age: 25,
//   city: "Noida"
// };

// let keys = Object.keys(user)

// console.log(keys)

///// output:- ["name"  "age" , "city"]

/////////////step:2

let user = {
  name: "Ankit",
  age: 25,
  city: "Noida"
}
let arr = [];
let keys = Object.keys(user)
for(let i=0;i<keys.length;i++) {
      debugger;
    console.log(typeof keys[i])
    arr.push(keys[i])
}
console.log(arr);

