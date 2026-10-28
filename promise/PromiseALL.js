const promise1 = Promise.reject("Result1")
const promise2 = Promise.resolve("Result2")
const promise3 = Promise.reject("Result3")

Promise.allSettled([promise1, promise2, promise3])
.then((resolve) => {
    console.log(resolve)
}
)
.catch((error) => {
    console.log(error)
}
)
.finally(() => console.log("finally result"))

// Result1 

// let promise1 = fetch("https://jsonplaceholder.typicode.com/users");
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts");

// Promise.all([promise1 , promise2])
// .then((response) => response.json())
// .then((resvole) => console.log(resvole))
// .catch((error) => console.log('error' , error.message))
// .finally(() => console.log('All API calls finished'))


// let promise1 = fetch("https://jsonplaceholder.typicode.com/users")
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts")

// Promise.all([promise1 , promise2])
// .then(([response1 , response2]) => {
//   console.log(!response1.ok , !response2.ok);
// if(!response1.ok , !response2.ok) {
//   console.log("resoonse")
//   throw new Error("API is error")
// }
// return Promise.all(
//   [response1.json(),
//   response2.json()]
// );
// })
// .then(([user1 , user2]) => {
//   console.log("user1" , user1)
//   console.log("user2" , user2)
// }
// )
// .catch((error) => console.log(error , "please find error come"))
// .finally(() => console.log("api completed"))


