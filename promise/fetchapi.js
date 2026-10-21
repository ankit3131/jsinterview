fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>
    {
    if(!response.ok) {
        throw new Error(`HTTP checkssssssssssssssssssss: ${response.status}`)
    }
    return response.json()
    })

.then((data) => 
{
    console.log(data[0].name)
    data.forEach((key) => 
    {
        console.log(key.name + ' AND ' + key.email);
    }
    )
}
)
.catch((error) => console.log("error comingsssssssssssssss" , error.message))
.finally(() => console.log("API request completed"))