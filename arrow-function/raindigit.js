let num = (arr) => {
       let max = arr[0];
       let current = 0;
    for(let i=0;i<arr.length;i++) {
        current = current + arr[i];
        if(current<0) {
            current = 0;
        }

     if(current > max) {
        max = current;
     }

    }
    return max;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(num(nums));