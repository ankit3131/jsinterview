
let arr = [1,8,4,1,2,3,8]

let arr2 = []

for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        if(arr[i] >arr[j]) {
            let temp = arr[i] 
            arr[i] = arr[j] 
            arr[j] = temp
        }
    }
}
for(let i = 0;i<arr.length;i++) {
 if(arr[i]<=arr[i+1] && arr[i] !== arr[i+1]) {
 arr2.push(arr[i])
 }   
}
     console.log(arr2)

    //  1,2,3,4