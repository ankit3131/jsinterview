
                async function searchProducts(query) {
        try {
                // let query = await fetch(url);
            if(!query.ok) {
                throw new Error(`error , ${query.status}`)
            }
        let response = await query.json();
    console.log("response111" ,response)
        }
        catch (error) {
        console.log(`error api fetch , ${error.message}`)
        }
        finally {
        console.log("api response completed")
        }
        }
    setTimeout(async () => {
           try {
    let query = await fetch("https://dummyjson.com/products/");
    searchProducts(query);
  } catch (networkError) {
    console.log("Network error:", networkError.message);
  }
    } , 1000)
    // searchProducts(query)