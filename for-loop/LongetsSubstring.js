
// let str = "abcab";
// let count = 0;
// for(let i=0;i<str.length;i++) {
//     let arr = [];
//     for(let j=i;j<str.length;j++) {
//         debugger;
//         if(arr.includes(str[j])) {  
//             break;
//         }
//         if(count<3) {
//         arr.push(str[j])
//         }
//         if(count>3) {
//             break;
//         }

//     }
//     if(count<3) {
//     console.log(arr);
//     count++
//     }
// }

//output:-3

let str = "abcab";
let count = 0;
for(let i=0;i<str.length;i++) {
    let arr = [];
    for(let j=i;j<str.length;j++) {
        debugger;
        if(arr.includes(str[j])) {  
            break;
        }
        if(count<3) {
        arr.push(str[j])
        }
        if(count>3) {
            break;
        }

    }
    if(count<3) {
    console.log(arr);
    count++
    }
}