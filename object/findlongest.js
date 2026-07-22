function keys(keylength) {
    let keys = Object.keys(keylength);
    let count = 0;
    for(let i=0;i<keys.length;i++) {
        if(keys[i].length >= count) {
            count  = keys[i].length;
        }
    }
    return count;
    console.log(keys); 
}

const obj = keys({
 javascript: 1,
 css: 2,
 html: 3
});
console.log(obj);