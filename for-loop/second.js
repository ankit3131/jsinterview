let arr = [3,4,5,6,1];
let max = -1;
let secondmax = -1;
for(let i=0;i<arr.length;i++) {
    if(arr[i]>max) {
        secondmax = max;
        max = arr[i];
    }
    if(arr[i]>secondmax && arr[i]<max) {

        secondmax = arr[i]
    }
   
}
// console.log(max);
console.log(secondmax);