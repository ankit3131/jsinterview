fetch("https://jsonplaceholder.typicode.com/users")
.then((resolve) => resolve.json())
.then((data) => 
{
    console.log(data[0].name)
    data.forEach((key) => 
    {
        console.log(key.name + ' AND ' + key.email);
        // console.log(key.email)
    }
    )
}
)
.catch((error) => console.log(error))
.finally(() => console.log("API request completed"))