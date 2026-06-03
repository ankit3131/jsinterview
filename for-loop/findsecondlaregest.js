// const arr = [10, 5, 8, 20, 15];
// let arr1 = [];
// for(let i=0;i<arr.length;i++) {
//     for(let j=i+1;j<arr.length;j++) {
//         if(arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// // console.log(arr)
// let count = 0;
// for(let i=0;i<arr.length;i++) {
    
//     for(let j=0;j<arr.length-1;j++) {
//        count = arr[j]
//     }
// }
// console.log(count);
//output:-15 

 
const arr = [5, 10, 20];
let infiniex = -0;
let secondvalue = -0;

for(let i=0;i<arr.length;i++) {
  debugger;
if(arr[i] > infiniex) {
infiniex = arr[i]
// secondvalue = infiniex;
}
else if(arr[i] > secondvalue) {
  debugger;
secondvalue = arr[i]
}
}

console.log(secondvalue);

//output:-15
