let myPromise = new Promise((result , reject) => {
    let user = "admin"
    let pass = "12345"
    setTimeout(() => {
    if(user === 'admin' && pass === '12345') {
reject("Welcome admin")
    }
    else{
        reject("Invalid username or password")
    }}
    ,3000)
})
myPromise.then(console.log)
.catch(console.log)
.finally(() => console.log('Login process completed'))

// Welcome admin
// Login process completed