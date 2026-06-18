
function string(str) {
let count = 1;
let total = 1;
let arr = str.split('')
for(let i=0;i<arr.length;i++) {
    if(arr[i] === arr[i+1]) { 
        debugger;
  count++;
    if(count>=total){
total = count;
    }
    }
  
    else {
       count = 1;
    }
}
 console.log(total);
//  return total;
// return count;
}
console.log(string('bbbabbbbbbb'));



// for(let i=0;)