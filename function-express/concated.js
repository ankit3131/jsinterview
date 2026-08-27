let string = function (arr) {
    let add = [];
for(let i=0;i<arr.length;i++) {
    for(let j=1;j<arr.length;j++) {
        debugger;
        let left = arr.slice(0,j)
        let right = arr.slice(j)

        // console.log({left});
        if(left.includes(add[i]) && right.includes(add[i])) {
            debugger;
    add.push(arr[i])
}
    }

}
return add;
}

let words = string(["cat","dog","catdog"]);
console.log(words);
