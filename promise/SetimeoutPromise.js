const myPromise = new Promise((result , reject) => {
    debugger;
setTimeout(result("result sucess") , 3000)})
myPromise.then((result) => console.log(result));