let str = "pwwkew";
for(let i=0;i<str.length;i++) {
    let arr = [];
    let count = 0;
    for(let j=i;j<str.length;j++) {
        debugger;
        if(arr.includes(str[j])) {
            break;
        }
        
        if(count<3) {
 arr.push(str[j])
        }
    }
    console.log(arr)
}

//output:-3