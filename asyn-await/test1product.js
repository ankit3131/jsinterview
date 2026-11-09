async function getProduct() {
try {
    const response = await fetch("https://fakestoreapi.com/products");
    if(!response.ok) {
        throw new Error(`response--- , ${response.status}`)
    }
const result = await response.json()
const allresult = result.map((value) => {
    return (`title:= ${value.title} , price:= ${value.price}, category:= ${value.category} `);
})
console.log(allresult);
}
catch (error) {
    console.log("error====" , error.message)
}
finally {
    console.log("Loading compconsted")
}
}
getProduct()