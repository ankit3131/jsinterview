async function getUserData() {
try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
     if(!response.ok) {
throw new error (`error ,${response.status}`)
    }
    const result = await response.json();
    console.log(`result , ${result.name} ,${result.email}`)
}
catch (error) 
{
    console.log(error.message)
}
finally {console.log("API completed")}
}
getUserData()