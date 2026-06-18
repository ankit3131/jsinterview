
function string(str) {
let count = 1;
let arr = str.split('')
for(let i=0;i<arr.length;i++) {
    if(arr[i] === arr[i+1]) {
        debugger;
      count++
    }
    else{
        count = 0;
    }
}
 console.log(count);
 return count;
// return count;
}
                                                                                                                                                                    
 
console.log(string('bbbab'));




// for(let i=0;)