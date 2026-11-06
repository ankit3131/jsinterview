

function getUserAndPost(api1 , api2) {
Promise.all([api1 , api2])
.then(([result1 , result2]) => {
    if(!result1.ok , !result2.ok) {
        throw new error("error message" , result1.status) 
    }
    return Promise.all(
    [result1.json(),
    result2.json()]
)
}
)
.then(([user1, user2]) => {
    console.log(user1)
    console.log(user2)
}
)
.catch((error) => console.log("error:" , error.message))
.finally(() => console.log("api success"))
}
let promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
getUserAndPost(promise1 , promise1);
// let response = getUserAndPost();
// let wait = await response.json();