
let arr = [1,2,3,4,5];
let Promise1 = arr.filter((id) => id <= 3)
.map(id => {
let response = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
return response.then((response) => {
if(!response.ok) {
  throw new Error("API failed",response.status)
}
 return response.json() 
}
)
})
Promise.all(Promise1)
.then((success) => console.log(success))
.catch((error) => console.log(error))
.finally(() => console.log("api response"))
