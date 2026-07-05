//////step:1

// function compare(prop1 , prop2) {
//     // let allProp = Object.entries(prop1 , prop2);
//     // console.log(allProp)
//     return ({...prop1 , ...prop2});

// }
// let obj1={
//  name:"Ankit"
// }

// let obj2={
//  age:25
// }

// let obj = compare(obj1, obj2);

// console.log(obj)

///
// {
//   name: "Ankit",
//   age: 25
// }

//////step:-2

// function compare(prop1 , prop2) {
// let result = {};

// for(let key in prop1){
//     result[key] = prop1[key]
// }
// for(let key in prop2) {
//     result[key] = prop2[key]
// }
// return result;
// }
// let obj1={
//  name:"Ankit"
// }

// let obj2={
//  age:25
// }
// let obj = compare(obj1, obj2);

// console.log(obj)

// {
//   name: "Ankit",
//   age: 25
// }


////step:-3
function compare(prop1,prop2) {
    let result = {}
    let key = Object.keys(prop1);

    for(let i=0;i<key.length;i++) {
        result[key] = prop1[key];
    }
        let key1 = Object.keys(prop2);

    for(let i=0;i<key1.length;i++) {
        result[key1] = prop2[key1]
    }
    return result;
}
let obj1 = {
    name : "Ankit"
}
let obj2 = {
    age : 25
}
let obj = compare(obj1,obj2)
console.log(obj)