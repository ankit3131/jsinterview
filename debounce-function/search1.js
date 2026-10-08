// function main() {
// function inner() {

// }
// }
// let search = main()
// search("A");
// search("APP");
// search("APPL");
// search("APPLE");

function main(data) {
console.log(data);
}
function search(callback , value) {
    setTimeout(callback(value) , 1000)
}
search(main , "A");
search(main, "APP");
search(main, "APPL");
search(main, "APPLE");

// 

// function main() {
//     let names = 'Ankit'
// console.log(names);
// }
// setTimeout(main,4000)