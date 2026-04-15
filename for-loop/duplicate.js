// Solve:-1

// let arr = [1,2,2,2,3,2,3];
// let duplicate = [];
// for(let i=0;i<arr.length;i++) {
// for(let j=i+1;j<arr.length;j++) {
//     debugger;
//     if(arr[i] === arr[j] && !duplicate.includes(arr[i])) {
//         duplicate.push(arr[i])
//     }
// }
// } 
// console.log(duplicate);
// output:-2,3

//solve:-2
// let arr = [1,2,2,2,3,2,3];
// let names = arr.filter((item,index) => {
//     return arr.indexOf(item) === index && item>1;
// });
// console.log(names);
// output:-2,3

// solve3
let arr = [1,2,2,2,3,2,3];
let duplicate = [];
let num = 0;
for(let i=0;i<arr.length;i++) {
    for(let j=0;j<arr.length;j++) {
        debugger;
if(arr[i] === arr[j])
{
    num++
}
if(num === 1) {
      debugger;
 duplicate.push(arr[i])
}
    }
}
console.log(duplicate)