// step:-1
const numbers = [10, 20, 10, 30, 20, 40, 10];
let name = numbers.reduce((accum ,user) => { 
   if(!accum.includes(user)) {
    debugger;
accum.push(user);
   }
   return accum
},[]);
console.log(name);
// otuput:-[10, 20, 30, 40]

// step:-2
// const numbers = [10, 20, 10, 30, 20, 40, 10];
// let name = numbers.filter((user , index) => numbers.indexOf(user) === index);
// console.log(name);

// otuput:-[10, 20, 30, 40]

// step:-3
// const numbers = [10, 20, 10, 30, 20, 40, 10];
// let arr = [];
// for(let i=0;i<numbers.length;i++) {
//     if(numbers.indexOf(numbers[i]) === i) {
//         arr.push(numbers[i]);
//     }
// }
// console.log(arr);
// otuput:-[10, 20, 30, 40]
