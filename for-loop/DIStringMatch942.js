function increase(s){
     let min = 0;
        let max= s.length;
        let result = [];
    for(let i=0;i<s.length;i++){
       
        if(s[i] === "I"){
            result.push(min);
            min++;
        }
        else{
            result.push(max)
            max--
        }
    }
    return result;
}

let arr = increase("IDID");
console.log(arr);