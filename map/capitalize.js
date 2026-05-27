let arr = ["ankit"];

let arr1 = arr.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
})
// let arr1 = arr.map((item) => item.capitalize())
// let arr1 = arr.map((item) => item.toUpperCase())
console.log("arr1",arr1)
//output ["Ankit","React"]