let setTimer;

function search(value) {
clearTimeout(setTimer);

setTimer = setTimeout( () => {
    debugger;
console.log(value)
}, 1000)
}
search("A")
search("An")
search("Ank")
search("Anki")
search("Ankit")

// output:- Ankit 

// let setTimer;

// function search(value) {
//     debugger;
// clearTimeout(setTimer);
// setTimeout( () => {
//     console.log(value)
// } , 20)
// }
// search("A")
// search("An")
// search("Ank")
// search("Anki")
// search("Ankit")

// otuput:-
// A
// An
// Ank
// Anki
// Ankit
