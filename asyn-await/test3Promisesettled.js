async function Notifection() {
try {
let [response1 , response2 , response3] = await Promise.allSettled([users , posts , invalid])

// console.log(`respons3---------- , ${response3.value.status}`);
// console.log(`respons3---------- , ${response3.value.ok}`); 

if(response1.status === "fulfilled" && response1.value.ok) {
let data1 = await response1.value.json()
console.log(data1)
}
else {
       throw new Error("Users API failed!");
    }
if(response2.status === "fulfilled" && response2.value.ok) {
let data2 = await response2.value.json()
console.log(data2)
}
else {
       throw new Error("Users API failed!");
    }
    if(response3.status === "fulfilled" && response3.value.ok) {
let data3 = await response3.value.json()
console.log(data3)
}
else {
       throw new Error("Users API failed!");
    }




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