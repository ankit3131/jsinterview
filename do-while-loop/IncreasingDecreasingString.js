function string(a,b,c){
    let result = ""
    while(a>0||b>0||c>0){
        if(a>0) {
            result += "a";
a--
        }
        if(b>0) {
            result += "b"
            b--
        }
        if(c>0) {
            result += "c"
            c--
        }
        if(c>0) {
            result += "c";
            c--
        }
        if(b>0) {
            result += "b";
            b--
        }
        if(a>0) {
            result += "a";
            a--
        }
    }
    return result;
}
console.log(string(4,4,4)); 

// output:- abccbaabccba