// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// let nums = [0,1,0,3,12]
// let num = 0;
// let arr = [];
// let arr1 = [];
// let arr2 = [];
// for(let i=0;i<nums.length;i++) {
//     debugger;
//     if(nums[i] !== 0) {
//     arr.push(nums[i])
//     }
//     else if(nums[i] === 0) {
//    arr1.push(nums[i])
//     }
// }
// arr2 = [...arr , ...arr1]
// console.log(arr2)

// output:- [1,3,12,0,0]

let nums = [0,1,0,3,12]
let count = 0;
let arr1 = [];
let arr2 = [];
for(let i=0;i<nums.length;i++) {
    for(let j=i+0;j<nums.length;j++) {
        if(nums[i] > nums[j]) {
let temp = nums[i];
nums[i] = nums[j];
nums[j] = temp;
        }
    }
}

// console.log(nums)

for(let i=0;i<nums.length;i++) {
    if(count !== nums[i]) {
      arr1.push(nums[i])  
    }
    else if(count === nums[i]){
arr2.push(nums[i])
    }
}

console.log(...arr1 , ...arr2)


////////////1 3 12 0 0 //////////////