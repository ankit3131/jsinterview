const myPromise = new Promise((result , reject) => {
    debugger;
    let logic = true;
    if(logic) {
        debugger;
result("Sucess result")
    }
    else {
        reject("Error not worked")
    }
})
myPromise.then((result) => console.log(result))
.catch((failed) => console.log(failed))
.finally((final) => console.log("finished"));