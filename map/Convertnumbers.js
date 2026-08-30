const numbers = [1, 2, 3, 4, 5];
let arr = numbers.map((value) => {
if(value % 2 === 0) {
    return "odd"
}
else {
    return "even"
}
})
console.log(arr);