class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

     getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        for (let product of products) {
            product.price = product.price - (product.price * discount);
        }
}

}

 let milk = new ProductProperties("Milk", 3.10, 40);
 let bread = new ProductProperties("Bread", 2.00, 1);
 let eggs = new ProductProperties("Eggs", 1.00, 1);

    console.log(milk.getTotalValue());

    console.log(milk.toString());


ProductProperties.applyDiscount([milk, bread, eggs], 0.10);

console.log(milk.toString());
console.log(bread.toString());
console.log(eggs.toString());

