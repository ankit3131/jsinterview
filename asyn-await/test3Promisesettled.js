async function Notifection() {
try {
let [response1 , response2 , response3] = await Promise.allSettled([users , posts , invalid])
if(!response1.ok || !response2.ok || !response3.ok)
{
    console.log(`${response1.status} , ${response2.status} , ${response3.status}`)
}
// if(response1.status === "fulfilled" && response1.ok) {
// let data = await response1.value.json();
// console.log(data);
// }
let data1 = await response1.value.json()
let data2 = await response2.value.json()
let data3 = await response3.value.json()

console.log(data1)
console.log(data2)
console.log(data3)
}
catch (error) {
console.log("error" , error)
}
finally {
    console.log("all api sucess")
}
}

const users = fetch("https://jsonplaceholder.typicode.com/users");
const posts = fetch("https://jsonplaceholder.typicode.com/posts");
const invalid = fetch("https://jsonplaceholder.typicode.com/invalid");

Notifection(users,posts,invalid)