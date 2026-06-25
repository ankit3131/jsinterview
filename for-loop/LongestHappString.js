let a=1;
let b=1;
let c=7;
let count = 0;
let result = "";
for(let i=0;i<9;i++) {
    if(c>=0 && count<2) {
        debugger;
result += "c"
    // console.log("c");
    c--
    count++;
    }
    else if( a > 0) {
        debugger;
        result += "a"
        // console.log("a")
        count=0;
    a--
    }
    else if(b > 0) {
        debugger;
        result += "b"
        // console.log("b")
        b--
        count = 0;
    }
}
console.log(result);