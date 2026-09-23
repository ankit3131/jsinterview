// step:-1

// let search = (value) => {
//     debugger;
// setTimeout(() => {
// console.log("value print" , value)
// }, 500)
// }
// search("A");
// search("AN");
// search("ANK");
// search("ANKI");
// search("ANKIT");

// output:- setTimeout(() this is clouser function without any value pass in setTimeout
// value print A
// value print AN
// value print ANK
// value print ANKI
// value print ANKIT

// step:2

let search = (value) => {
debugger;
setTimeout((value) => {
console.log("value print" , value);
}, 500, value);
}
search("A")
search("AN")
search("ANK")
search("ANKI")
search("ANKIT")

// output:- setTimeout((value) this is not clouser function this is generic callback.
// value print A
// value print AN
// value print ANK
// value print ANKI
// value print ANKIT