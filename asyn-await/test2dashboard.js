async function getDashboard(api1 , api2 , api3) {
try{
const [response1 , response2 , response3] = await Promise.all([api1 , api2 ,api3])
if(!response1.ok) {
throw new Error(`response1 , ${response1.status}`)
}
if(!response2.ok) {
throw new Error(`response2 , ${response2.status}`)
}
if(!response3.ok) {
throw new Error(`response3 , ${response1.status}`)
}
let data1 = await response1.json();
console.log("success-----" , data1)

let data2 = await response2.json();
console.log("success-----" , data2)

let data3 = await response3.json();
console.log("success-----" , data3)
}
catch (error) {
console.log("error----" , error)
}
finally {
console.log("Dashboard data loaded")
}
}
const userAPI = fetch("https://jsonplaceholder.typicode.com/users");
const postAPI = fetch("https://jsonplaceholder.typicode.com/posts");
const commentAPI = fetch("https://jsonplaceholder.typicode.com/comments");
getDashboard(userAPI , postAPI , commentAPI);
