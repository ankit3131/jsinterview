// let count = 0;
// let numbers = (sum) => {
//     debugger;
// count = sum + count;

// }

// const value = [10,20,30,40]
// value.forEach(numbers)
// console.log(count);

// output:- 100 inside use call back

let count = 0;
const value = [10,20,30,40]
value.forEach(sum =>  {
    count += sum;
})

console.log(count);

// output:-100 . inside use without call back