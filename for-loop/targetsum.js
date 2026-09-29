let sum = [2,6,4,5]
let count = 0;
let target = 8;
let arr = [];
for(let i=0;i<sum.length;i++) {
    for(let j=i+1;j<sum.length;j++) {
        count = sum[i] + sum[j];
        if(count === target) {
            arr.push(sum[i] , sum[j]);
        }
    }
}
console.log(arr);

// arr[2,6]