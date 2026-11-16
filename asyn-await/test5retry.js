async function fetchWithRetry(url , count) {
    try {
         if(count == 0) {
       throw new Error(`API try again`)
    }
    const response = await fetch(url);

        if(!url.ok) {
            throw new Error(`error , ${url.status}`)
        }
            
       
let data = await response.json();
console.log("response---" , data);
    }
    catch (error) {
console.log(error.message)

console.log("retry coming" , count)
return await fetchWithRetry(url , count-1);
    }
    finally {
console.log("Api response completed")
    }
}
let count = 3;
let url = await fetch("https://jsonplaceholder.typicode.com/user")
fetchWithRetry(url , count);