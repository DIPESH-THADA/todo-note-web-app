const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
loginBtn.addEventListener("click", function () {
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;
    console.log("Username:", usernameValue);
    console.log("Password:", passwordValue);
});
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
const product1 = new Product(1, "Laptop", 999.99);
console.log(product1.id);
console.log(`Product Name: ${product1.name} ${product1.id}, Price: ${product1.price}`);
product1.name = "Smartphone";
console.log(`Updated Product Name: ${product1.name}`);
class PriceCalculator {
    static calculateTotal(price, quantity) {
        return price * quantity;
    }
}
console.log(PriceCalculator.calculateTotal(50, 3));
class DigitalProduct extends Product {
    constructor(id, name, fileSize) {
        super(id, name + " (Digital)", 0);
        this.fileSize = fileSize;
    }
}
const ebook = new DigitalProduct(2, "E-book", 5);
console.log(ebook.name);
console.log(ebook.fileSize);
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    showdetails() {
        console.log(`Username: ${this.username}, Password: ${this.password}`);
    }
    static create(username, password) {
        return new User(username, password);
    }
}
const user = User.create("john_doe", 12345);
console.log(user.username);
let product2 = { name: "Keyboard", price: 50, available: true };
let product3 = { name: "Monitor", price: 300, available: false };
console.log(product2, product3);
export {};
//# sourceMappingURL=index.js.map