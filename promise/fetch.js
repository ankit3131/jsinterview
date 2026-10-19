let newPromise = new Promise((resolve , reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => {
            resolve(data)
    })
    .catch((error) => {
        reject(error)
    })
})

newPromise.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("result completed"))

// Api result completed response https://jsonplaceholder.typicode.com/users

