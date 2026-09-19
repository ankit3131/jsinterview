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

function bankAccount(balance) {
    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount(1000);

account.deposit(500);

console.log(account.getBalance());