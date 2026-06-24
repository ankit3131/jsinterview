function arr1(str) {
    let count = [];
    
    for (let i = 0; i < str.length; i++) {
        count.push(str[i]);
    }
    
    return count;
}

let arr = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1,3];

let result = [];
for(let i=0;i<arr.length;i++) {
    result[indices[i]] = arr[i];
}
console.log(result);
//output:-leetcode