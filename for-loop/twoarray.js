let arr =  [1,2]
let arr1 = [3,4]
let arr3 = []

for(let i=0;i<arr.length;i++) {
for(let j=0;j<arr1.length;j++) {
  if(i === j) {
let sum = arr[i] + arr1[j];
arr3.push(sum)
  }
}
}


console.log(arr3)