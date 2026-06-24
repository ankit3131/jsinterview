function isomorphic(arr,string){
    let logic = true;
    if(arr.length !== string.length) return !logic
    for(let i=0;i<arr.length;i++) {
        debugger;
    let arrindex = arr.indexOf(arr[i]);
    let stringIndex = string.indexOf(string[i]);
    if(arrindex !== stringIndex) {
        return false
console.log(arrindex , stringIndex);
    }
}
return true;
}
let arr = "egi"
let string = "ade"
console.log(isomorphic(arr,string))