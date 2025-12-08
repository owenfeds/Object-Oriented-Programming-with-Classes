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
 let socks = new ProductProperties("Socks", 5.00, 2);
 let shoes = new ProductProperties("Shoes", 30.00, 3);

    console.log(milk.getTotalValue());

    console.log(milk.toString());


ProductProperties.applyDiscount([milk, bread, eggs], 0.10);

console.log(milk.toString());
console.log(bread.toString());
console.log(eggs.toString());

class StoreProperties {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    addPerishableProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        let total = 0;
        for (let product of this.inventory) {
            total = total + product.getTotalValue();
        }
        return total;
    }
    findProductByName(name) {
        for (let product of this.inventory) {
           return product;
        }
         return null;
    }

}

let store = new StoreProperties();

store.addProduct(socks);
store.addProduct(shoes);
store.addPerishableProduct(milk);
store.addPerishableProduct(bread);
store.addPerishableProduct(eggs);

console.log(store.getInventoryValue());

ProductProperties.applyDiscount(store.inventory, 0.10);

console.log(store.getInventoryValue());

console.log(eggs.toString());
