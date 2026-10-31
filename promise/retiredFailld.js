// let url = () => fetch("https://jsonplaceholder.typicode.com/user");
// function fetchWithRetry(Promise1 , count) {

//     // let Promise1 = fetch(url)
// return Promise1()
// .then((response) => {
//     if (!response.ok) {
//                 throw new Error("API Failed: " + response.status);
//             }
//             return response})
// .catch((error) => {
          
//        if (count === 0) {
//                 throw new Error("API failed after all retries");
//             }
        
    
//     console.log('Api Failed' , count)
// return fetchWithRetry(Promise1 , count-1)
// } 
// )

// }

// let reties = 3;
// fetchWithRetry(url , reties)
// .then((resolve) => resolve.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))

////////////////////////////////////////////////////////
// output:-1
// API Failed. Retry remaining: 3
// API Failed. Retry remaining: 2
// API Failed. Retry remaining: 1
// API failed after all retries


function fetchWithRetry(url, count) {

    if (count === 0) {
        return Promise.reject(
            new Error("API failed after all retries")
        );
    }

    let promise1 = fetch(url);

    return promise1
        .then((response) => {

            if (!response.ok) {
                throw new Error("API Failed: " + response.status);
            }

            return response.json();
        })
        .catch((error) => {

            console.log("Retry remaining:", count);

            return fetchWithRetry(url, count - 1);
        });
}

let retries = 3;

fetchWithRetry(
    "https://jsonplaceholder.typicode.com/user",
    retries
)
.then((data) => console.log("Success:", data))
.catch((error) => console.log(error.message));

////////////////////////////////////////////////////////
// output:-1
// API Failed. Retry remaining: 3
// API Failed. Retry remaining: 2
// API Failed. Retry remaining: 1
// API failed after all retries


