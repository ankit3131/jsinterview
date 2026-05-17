let arr = [2,4,4,5,6]
let target = 6;
let total = 0;
for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        total = arr[i] + arr[j]
if(total === target){
console.log(arr[i],arr[j]);
break;
}
    }
    
}