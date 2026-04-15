let arr = [1,2,3,2,2,4];
let duplicateNum = [];
for(let i=0;i<arr.length;i++)   
    {
        debugger;
        if(arr.indexOf(arr[i]) !== i)
            {
duplicateNum.push(arr[i])
    }
    
}
console.log(duplicateNum);