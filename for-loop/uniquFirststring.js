// let str = "aabbcde"

// console.log(str.charAt(4))

/// c will be print by google 

let str = "aabbcde"
let count = 0;
for(let i=0;i<str.length;i++) {
if(str[i] === str[i+1]) {
debugger;
    count++
}
if(count === 0) {
    console.log(str[i])
    count=0;
}
}