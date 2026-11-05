// async function getUserAndPost() {
//     try {
//      const userAPI = await fetch(
//       "https://jsonplaceholder.typicode.com/usersd/1"
//     );
//     if(!userAPI.ok) {
//         throw new error(`error is coming : ${userAPI.status}`);
//     }
//     //  const postAPI = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     //  if(!postAPI.ok) {
//     //     throw new error(`error is coming , ${postAPI.status}`);
//     // }
//     const response1 = await userAPI.json()
//     // const response2 = await postAPI.json()
//     console.log(`response1 api fetch , name:- ${response1.name} , email:- ${response1.email}`)
//     // console.log(`response2 api fetch' , title:- ${response2.title}, body:- ${response2.body}`)

//     } catch (error) {
//         console.log(`Error:, ${error.message}`)
//     } finally {
//         console.log('All requests completed')
//     }
// }
// getUserAndPost()

async function getUserAndPost() {
  try {
    const userAPI = await fetch(
      "https://jsonplaceholder.typicode.com/userss/1"
    );

    if (!userAPI.ok) {
      throw new Error(`User API failed: ${userAPI.status}`);
    }

    const response1 = await userAPI.json();

    console.log("User Name:", response1.name);
    console.log("User Email:", response1.email);


  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("All requests completed");
  }
}

getUserAndPost();