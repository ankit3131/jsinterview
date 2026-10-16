// const myPromise = new Promise((resolve , reject) => {
// reject("Login failed")
// })
// myPromise.then(result => console.log(result))
// .catch(reject => console.log(reject))

// Login failed

// step:-2
const condition = true;
const logic = new Promise((resolve , reject) => {

if(condition) {
resolve("Login sucessfully")
}
else {
    reject("login faield")
}
})
    logic.then(result => console.log(result))
    .catch(failed => console.log(failed))
    .finally(() => console.log("success"));
