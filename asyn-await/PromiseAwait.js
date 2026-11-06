

// function getUserAndPost(api1 , api2) {
// Promise.all([api1 , api2])
// .then(([response1 , response2]) => {
//     if(!response1.ok , !response2.ok) {
//         throw new error(`error message" , ${response1.status} , ${response2.status}`) 
//     }
//     return Promise.all(
//     [
//     response1.json(),
//     response2.json()
//     ]
// )
// })
// .then(([user1, user2]) => {
//     console.log("user11111111",user1)
//     console.log("user22222222" , user2)
// }
// )
// .catch((error) => console.log("error:" , error.message))
// .finally(() => console.log("api success"))
// }
// let promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
// getUserAndPost(promise1 , promise2);
// let response = getUserAndPost();
// let wait = await response.json();


async function getUserAndPost(api1 , api2) {
Promise.all([api1 , api2])
.then(([response1 , response2]) => {
    if(!response1.ok , !response2.ok) {
        throw new error(`error message" , ${response1.status} , ${response2.status}`) 
    }
    return Promise.all(
    [
    response1.json(),
    response2.json()
    ]
)
})
// .then(([user1, user2]) => {
//     console.log("user11111111",user1)
//     console.log("user22222222" , user2)
// }
// )
.catch((error) => console.log("error:" , error.message))
.finally(() => console.log("api success"))
}
let promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
getUserAndPost(promise1 , promise2);