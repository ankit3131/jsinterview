

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
// .then(([response1, response2]) => {
//     console.log("response11111111",response1)
//     console.log("response22222222" , response2)
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


async function getUserAndPost() {
    try {
      
const [response1 , response2] = await Promise.all([api1,api2])
console.log("response1--", response1)
    if(!response1.ok  || !response2.ok) {
throw new Error(`error coming , ${response1.status} and ${response2.status}`);
        }
const result1 = await response1.json();
const result2 = await response2.json();
console.log
(`result1:- ${result1.name} , ${result1.email} 
result2:- ${result2.title} , ${result2.body}`)
    }
    catch  (error) {
        console.log(`error, ${error.message}`);
    }

    finally {
        console.log('api response')
    }
}
let promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
getUserAndPost(promise1 , promise2);