let promise1 = fetch("https://jsonplaceholder.typicode.com/users")
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts")

Promise.all(([promise1 , promise2]))
.then((response) => {
    return Promise.all(
        response.map((response) => {
if (!response.ok) {
    throw new Error("API resonse error")
}
return response.json();
        })
    )
})
.then(([user , blog]) => {
    console.log("ueser" , user),
    console.log("blog" , blog)
})
.catch((error) => console.log(error))
.finally(() => console.log("API COMPLETED"))