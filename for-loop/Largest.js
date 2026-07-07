function largest(arr1) {
 
let strings = arr1.join("");
let max = 0;
let reverse = arr1.reverse();
let strings1 = reverse.join("");

if(reverse > strings1) {
max = reverse;
}
else{
    max = strings1;
}
return max;
}


let arr = largest([3, 30, 34, 5, 9]);
console.log(arr);