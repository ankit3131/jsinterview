// step:1
// function field(obj) {
// let entire = Object.entries(obj)
// return entire;
// }
// let user = field({
//     name : "Ankit",
// age : 25,
// city : "Noida",
// })

// console.log(user);

//  output
// [
//   ["name", "Ankit"],
//   ["age", 25],
//   ["city", "Noida"]
// ]

////step:2
// function field(obj) {
//     let arr = [];
//     let arr1 = Object.keys(obj);
//     for(let i=0;i<arr1.length;i++) {
//         arr.push([arr1[i] , obj[arr1[i]]])
//     }
//     console.log(arr);
// }
// let user = field({
//     name : "Ankit",
// age : 25,
// city : "Noida",
// })

// console.log(user);

//output:-
// [
//   ["name", "Ankit"],
//   ["age", 25],
//   ["city", "Noida"]
// ]

