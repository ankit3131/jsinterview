function word(string) {
    debugger;
    let count = 0;
    for(let i=0;i<string.length;i++) {
        debugger;
         let temp = "";
        for(let j=i;j<string.length;j++) {
   
    temp = string[j] + temp;
    if("aeiou".includes(temp[0] )) {
       count++; 
    }
// arr1 = arr;
// arr1.push(string);
// console.log(temp);
        }
        // console.log(string[i])
    }
    return count;
    // console.log(count);
}
let total = word("aba");
console.log(total)