let num = 10;
let myPromise = new Promise((resolve , reject) => {
resolve(num)
})

myPromise.then((result)=> {
    return result*2;
})
.then((add) => {
    return add+5
})
.then((sub) => {
    console.log(sub - 5)
})   