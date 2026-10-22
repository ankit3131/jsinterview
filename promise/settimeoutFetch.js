// step:-1
// let aws = fetch("https://jsonplaceholder.typicode.com/posts")
// setTimeout(() => 
// (
// aws.then((response) => response.json())
// .then((value) => console.log(value))
// .catch((error) => console.log(error))
// .finally(() => console.log("result success fully"))
// )
// ,1000)

//fully response api fetch data settimeout 

// step:-2
setTimeout (() => (   
fetch("https://jsonplaceholder.typicode.com/postsss")
.then( (response) => {
     if(!response.ok) {
throw new Error(`Request timed outaaa , ${response.status}`)
     }
    return response.json() 
})
.then((data) => console.log(data))
.catch((error) => console.log("Request timed out" , error.message))
.finally(() => console.log("Handle errors gracefully"))
),2000)


// output Request timed outaaa , Handle errors gracefully

