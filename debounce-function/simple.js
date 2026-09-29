// const searchUser = (value) => {
//     console.log("API Call:", value)
// }
//  searchUser("A");
//  searchUser("AN");
//  searchUser("ANK");
//  searchUser("ANKI");
//  searchUser("ANKIT");

//  output:-
// API Call: A
// API Call: AN
// API Call: ANK
// API Call: ANKI
// API Call: ANKIT

// const debounce = (callback , delay) => {
//     let timer;

//     return function (value) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
// callback(value);
//         } , delay)
//     }
// }
let timer;
const searchUser = (value) => {
    debugger;
    clearTimeout(timer);
    console.log(timer);
    setTimeout(() => {
console.log("value", value)
    }, 500)
}
 searchUser("A");
 searchUser("AN");
 searchUser("ANK");
 searchUser("ANKI");
 searchUser("ANKIT");