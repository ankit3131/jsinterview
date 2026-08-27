 let nums = (num) => {
        debugger;
        // let sum = [];
        //  let found = false;
    let count = num.length +1;
    for(let i=1; i<=count; i++){
            let found = false;
        for (let j = 0; j < num.length; j++) {
     if(i === num[j]) {
        found = true;
         break;
     }
  
        }
           if (found === false) {
    return i;
}
    }
}
const num = [3, 4, -1, 1];
console.log(nums(num));
