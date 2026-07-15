function arr(count) {
    debugger;
    let logical = true;
    let keys = Object.keys(count);
    for(let i=0;i<keys.length;i++) {
        debugger;
        if(keys.length > 0) {
            logical = false;
             return logical;
        }
        else {
            logical = true;
        }
       
    }
   
}

let obj = arr({a:"2",b:"3"});
console.log(obj)
