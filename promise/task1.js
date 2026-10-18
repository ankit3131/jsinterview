const isLoggedIN= false;
let setPromise = new Promise((result , reject) => {
if(isLoggedIN) {
result("Login successful")
}
else {
reject("Login failed")
}
})
setPromise.then((result) => console.log(result))
.catch((reject) => console.log(reject))
.finally(() => console.log("Login process completed"))