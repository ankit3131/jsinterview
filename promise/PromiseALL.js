const promise1 = Promise.resolve("Result1")
const promise2 = Promise.resolve("Result2")
const promise3 = Promise.resolve("Result3")

Promise.all([promise1, promise2, promise3])
.then((resolve) => {
    console.log(resolve)
}
)
.catch((error) => {
    console.log(error)
}
)
.finally(() => console.log("finally result"))
