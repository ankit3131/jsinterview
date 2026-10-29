let Promise1 = fetch("https://jsonplaceholder.typicode.com/users");
let Promise2 = fetch("https://jsonplaceholder.typicode.com/posts");
let Promise3 = fetch("https://jsonplaceholder.typicode.com/comments")

Promise.allSettled([Promise1,Promise2,Promise3])
.then(([result1,result2,result3]) => {
debugger;
    //     if(!result1.ok || !result2.ok || !result3.ok) {
    // throw new Error(`"error come" , ${result1.status}`)
    //     }
return Promise.allSettled(
    [
        result1.status === "fulfilled" && result1.value.ok 
        ? result1.value.json() : Promise.reject("API 1 failed"),

        result2.status === "fulfilled" && result2.value.ok 
        ? result2.value.json() : Promise.reject("API 2 failed"),

        result3.status === "fulfilled" && result3.value.ok 
        ? result3.value.json() : Promise.reject("API 3 failed")
    // result1.json(),
    // result2.json(),
    // result3.json()
    ]                                                 
)
})
.then(([result1,result2,result3]) => {
     console.log(result1.status === "fulfilled" ? result1.value : result1.reason);
          console.log(result2.status === "fulfilled" ? result2.value : result2.reason);
     console.log(result3.status === "fulfilled" ? result3.value : result3.reason);
})
.catch((error) => console.log(error))
.finally(() => console.log("finally api completed"))