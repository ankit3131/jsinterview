// let newPromise = new Promise((resolve , reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((result) => result.json())
//     .then((data) => {
//             resolve(data)
//     })
//     .catch((error) => {
//         reject(error)
//     })
// })

// newPromise.then((result) => console.log(result))
// .catch((error) => console.log(error))
// .finally(() => console.log("result completed"))

// this approch not good fetch() already work Promise directly can be work without any Promise 
// Api result completed response https://jsonplaceholder.typicode.com/users


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))

.finally(() => console.log("success fully"))