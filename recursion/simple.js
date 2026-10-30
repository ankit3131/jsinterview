function recurse(value) {
if(value === 0) {
    console.log("Just chill")
    return;
}
recurse(value-1)
console.log(value)
}
let count = 3;
recurse(count)