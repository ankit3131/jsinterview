function bankAccount() {
let amount = 1000;
function bank(){
    console.log(amount)
}
return bank;
}
const account = bankAccount();
account();