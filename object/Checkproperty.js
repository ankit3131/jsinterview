////step:1

// function field(key) {
// let allKey = Object.keys(key);
//  let logical = false;
// for(let i=0;i<allKey.length;i++) {
//     if(allKey[i] === 'age') {
// logical = true;
//     }
// }
// return logical;
// }

// let user = field({
//   name: "Ankit",
//   age: 25,
//   city: "Noida"
// });
// console.log(user);

////// output:- true

////step:2
// function field(key) {
//     return key.hasOwnProperty("age");
// }
// let user = field({
//   name: "Ankit",
//   age: 25,
//   city: "Noida"
// });
// console.log(user);

////// output:- true


////step:3
// function field(key) {
//     return Object.keys(key).includes("age");
// }
// let user = field({
//   name: "Ankit",
//   age: 25,
//   city: "Noida"
// });
// console.log(user);

////// output:- true

