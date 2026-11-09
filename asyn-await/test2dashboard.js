async function getDashboard(userAPI , userAPI , commentAPI) {
try{
const [response1 , response2] = await Promise.all([userAPI , userAPI ,commentAPI])
// let data = response.map((value) => {
//     console.log(value);
// })
// console.log("data----", data)
// console.log(`response---` , response)
if(!response1.ok) {
throw new Error(`response , ${response1.status}`)
}
let data1 = await response1.json();
console.log("success-----" , data1)
}
catch (error) {
console.log("error----" , error)
}
finally {

}
}
const userAPI = "https://jsonplaceholder.typicode.com/users";
const postAPI = "https://jsonplaceholder.typicode.com/posts";
const commentAPI = "https://jsonplaceholder.typicode.com/comments";
getDashboard(userAPI , postAPI , commentAPI);
