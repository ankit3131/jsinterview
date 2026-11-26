const cart = {
    discount:10,
    products: [
        {name : 'Laptop' , price : 5000},
        {name : 'Mobile' , price : 2000}
    ],
    calculation: function() {
        let total = 0;
        this.products.forEach((products) => {
            total += products.price;
        })
        this.products.forEach((products) => {
            total += products.price
        });
        const finalPrice = total - (total * this.discount / 100);
        console.log('final Price' , finalPrice)
    }
}
cart.calculation();

// final Price 12600

