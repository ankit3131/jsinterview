// step:-1
function outer() {
    let count = 0;
    function inner() {
        console.log(count)
        count++;
    }
   return inner;
}
let result = outer();
result();
result();
result();

// output:-
// 0
// 1
// 2
// when are use inner; count value not refresh and store value;

// step:-2
// function outer() {
//     let count = 0;
//     function inner() {
//         console.log(count);
//         count++
//     }
//     return inner();
// }
// // let reuslt = 
// outer();
// outer();
// outer();

// output:-
// 0
// 0
// 0
// when are use inner(); count value refresh startring 0 