let largest = (array) => {
    let max = 0;
for(let i=0;i<array.length;i++) {
    if(array[i] > max) {
        max = array[i];
    }
    // console.log(array[i]);
}
return max;
}
console.log(largest([10,50,25,100]))