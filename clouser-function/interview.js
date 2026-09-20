// step:-1

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const count1 = counter();
// const count2 = counter();

// console.log(count1());
// console.log(count1());
// console.log(count2());
// console.log(count2());

// output:-
// 1
// 2
// 1
// 2

// function bankAccount(balance) {
//     return {
//         deposit(amount) {
//             balance += amount;
//         },

//         getBalance() {
//             return balance;
//         }
//     };
// }

// const account = bankAccount(1000);

// account.deposit(500);

// console.log(account.getBalance());

// ouput:-1500

// function outer() {
//     debugger;
//     let count = 0;
//     return function() {
//         debugger;
//         count++;
//         console.log(count)
//     }
// }
// let a = outer();
// let b = outer();
// a();
// a();
// b();
// a();
// b();

// output:-
// 1
// 2
// 1
// 3
// 2

// function outer() {
//     let x = 10;

//     return function() {
//         x += 5;
//         console.log(x)
//     }

// }
// let fn = outer();
// fn();
// fn();
// fn();

// output:-

// 15
// 20
// 25


// function crateMultiplaer(number) {
//     return function(value) {
//         return number * value;
//     }

// }

// let double = crateMultiplaer(5);
// let triple = crateMultiplaer(3);
// console.log(double(2));
// console.log(triple(3));

// output:-
// 10 , 9

let count = user(() => 
    console.log("Hello"))
count();
count();
count();
