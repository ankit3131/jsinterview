function obj(arr) {
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] === null || arr[i] === 0 || arr[i] || false) {
            debugger;
            break;
        }
        else {
arr1.push(arr[i])
        }
    }
     return arr1;
}
let arr = obj([null, 0, false, 1])
console.log(arr);