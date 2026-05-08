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

let arr =  [1,2]
let arr1 = [3,4,5,6]
let arr3 = []

for(let i=0;i<arr.length;i++) {

  for(let j=0;j<arr1.length;j++) {
if(i === j) {
  arr3.push(arr[i] + arr1[j])
}
else {
  debugger;
  arr3.push(arr1[j])
}
  }
}
console.log(arr3)