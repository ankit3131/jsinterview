function appear(string){
    for(let i=0;i<string.length;i++) {
        let count = 1;
        if(string[i] === string[i+1]){
            count++;
            return count;
        }

    }
    return count;
}
let arr = appear("abccbaacz")
console.log(arr)