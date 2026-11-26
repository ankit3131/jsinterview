const product = {
    name: "Laptop",
    price: 50000,
    showProduct: function() {
        const display = () => {
            console.log(this.name)
            console.log(this.price)
        }
        display()
    }

}
product.showProduct();