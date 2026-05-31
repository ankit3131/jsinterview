let nums = [0,1,0,12,3]
let arr1 = nums.filter(num => num !==0)
let arr2 = nums.filter(num => num === 0)
console.log(...arr1 , ...arr2);