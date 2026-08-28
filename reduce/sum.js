// const numbers = [10,20,30,40];
// const total = numbers.reduce((sum , item) => {
//     return sum+item;
// })
// console.log(total);

// output:-100

// step:-2
// let sum = [10,20,30,40];
// let count = 0;
// for(let i=0;i<sum.length;i++) {
// count += sum[i];
// }
// console.log(count);

// output:-100

// step:-3
// let counts = 0;
// function sum(add) {
// for(let i=0;i<add.length;i++) {
// counts += add[i];
// }
// return counts;
// }
// let count = [10,20,30,40];
// console.log(sum(count))
// count:- 100

// step:-4
let count = [10,20,30,40];
let adds = 0;
let arr = count.forEach((add) => {
adds += add;
})
console.log(adds);
// count:100