function count(string) {
    let max = 0;
    let min = 0;
    let counts = 0;
    // let string = arr.split("");
    for(let i=0;i<string.length;i++) {
        if(string[i] === "R"){
            max++;
        }
        if(string[i] === "L"){
            min++;
        }
       if(max === min){
            counts++;
        }
    }
         return counts;
}
let arr = count("RLRRRLLRLL")
console.log(arr);

// output:-4 


