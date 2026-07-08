function count(counts) {
    debugger;
    let result = {};
    let count = 0;
    for(let i=0;i<counts.length;i++) {
        debugger;
if(result[counts[i].name]) {
    result[counts[i].name]++
}
else{
    result[counts[i].name] = 1;
}
    }
    return result;
}

let arr=[
 {name:"HTML"},
 {name:"CSS"},
 {name:"HTML"},
 {name:"JS"},
 {name:"CSS"}
];
let counter = count(arr);
console.log(counter);