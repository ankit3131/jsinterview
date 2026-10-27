let Promise1 = fetch("https://jsonplaceholder.typicode.com/users");
let Promise2 = fetch("https://jsonplaceholder.typicode.com/posts");
let Promise3 = fetch("https://jsonplaceholder.typicode.com/comments")

Promise.allSettled([Promise1,Promise2,Promise3])
.then(([result1,result2,result3]) => {

    console.log(result1);
    if(!result1.ok , !result2.ok , !result3.ok) {
throw new Error(`"error come" , ${result1.status}`)
    }
return Promise.allSettled(
    [
    result1.json(),
    result2.json(),
    result3.json()
    ]                                                 
)
})
.then(([users,posts,comments]) => {
    console.log(users)
    console.log(posts)
    console.log(comments)
})
.catch((error) => console.log(error))
.finally(() => console.log("finally api completed"))