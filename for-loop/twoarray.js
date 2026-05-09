// let arr =  [1,2]
// let arr1 = [3,4]
// let arr3 = []

// for(let i=0;i<arr.length;i++) {
// for(let j=0;j<arr1.length;j++) {
//   if(i === j) {
// let sum = arr[i] + arr1[j];
// arr3.push(sum)
//   }
// }
// }


// console.log(arr3)

// output: [4,6]

let arr =  [0,1]
let arr1 = [1,1,3,4] 
let arr3 = []

for(let i=0;i<arr.length;i++) {
for(let j=0;j<arr1.length;j++) {
  if(i === j) {
let sum = arr[i] + arr1[j];
arr3.push(sum)
  }
}
} 
for(let k=arr3.length;k<arr1.length;k++) {
  debugger;
  arr3.push(arr1[k])
}
console.log(arr3);

//output i was use 1,2,3,4 but i used chatgpt used

