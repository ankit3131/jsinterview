async function fetchWithRetry(url , count) {
    try {
        if(!url.ok) {
            throw new Error(`error , ${url.status}`)
        }
let response = await url.json();
console.log("response---" , response);
    }
    catch (error) {
if(count === 0) {
console.log(error.message)
}  

console.log("retry coming" , count)
count--;
    }
    finally {
console.log("Api response completed")
    }
}
let count = 3;
let url = await fetch("https://jsonplaceholder.typicode.com/user")
fetchWithRetry(url , count);