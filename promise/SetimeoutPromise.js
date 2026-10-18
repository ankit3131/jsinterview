// const myPromise = new Promise((result , reject) => {
//     debugger;
// setTimeout(() => result("result success") , 3000)})
// myPromise.then((result) => console.log(result));

// output:- result success

// step:-2
const myPromise = new Promise((result , reject) => 
{
    let logical = true;
    setTimeout(() => {
        if(!logical) {
            result("logical success")
        }
        else {
            reject("reject some issued")
        }
    }, 3000)
}
)

myPromise.then((result) => console.log(result))
.catch((reject) => console.log(reject))
.finally(console.log("success"));
