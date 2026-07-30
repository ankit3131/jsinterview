let trverse = function (arr) {
let obj = {};
for(let i=0;i<arr.length;i++) {
    if(obj[arr[i]]) {
        obj[arr[i]]++;
    }
    else {
        obj[arr[i]] = 1;
    }
}
return obj
}
console.log(trverse("AABAB"))