let num = (nums) => {
let count = [];
for(let i=0;i<nums.length;i++) {
    for(let j=i+1;j<nums.length;j++) {
        for(let k=i+2;j<num.length;k++) {
            if(nums[i]+nums[j]+nums[k] === 0) {
                debugger;
                count.push(num[i],num[j],num[k])
            }
        }
    }
}
return count;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(num(nums));