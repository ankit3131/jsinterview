// trick:-1
// let arr = [1,1,0,1,1,1,1,1,1,0,1,1,1,1,1]

// let count = 0;
// let max = 0;
// for(let i=0;i<arr.length;i++) {
//     if(arr[i] === 1) {
//         count++
       
//     }
//     if(count > max) {
   
// max = count;

//     }
//     if(arr[i] !==1) {
//         count = 0;
//     }
// }
// console.log(max)

///count 6 

let arr = [1,1,0,1,1,1,1,1,1,0,1,1,1,1,1]
let count = 0;
let max = 0;

for(let i=0;i<arr.length;i++) {
    if(arr[i] === 1) {
    count++
    max = Math.max(max , count)
    }
    else{
        count = 0;
    }
}
console.log(max);

// count 6 on chatgpt use
