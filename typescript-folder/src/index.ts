// console.log("Hello, World!");
// let age: number = 30;
// console.log(`I am ${age} years old.`);

// if (age > 50) age += 10;
// console.log(`In 10 years, I will be ${age} years old.`);

// console.log(age);

// let sales: number = 12346566_5657_3545;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level; // any type
// level = 1;
// level = "a beginner";

// let number: number[] = [1, 2, 3, 4];
// let user: [number, string, boolean, string] = [1, "dipesh", true, "developer"];

// enums are a way of giving more friendly names to sets of numeric values. By default, enums are number-based, starting at 0, but they can also be string-based. In this example, we have a string-based enum called Size, which has three members: Small, Medium, and Large. Each member is assigned a string value ("s", "m", and "l" respectively). We can then use the enum to declare a variable mySize of type Size and assign it the value Size.Medium. When we log mySize to the console, it will output "m".
// enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// user.push("dipesh");

// let mySize: Size = Size.Medium;
// console.log(mySize);

// functions
// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2026) return income * 1.2;
//   return income * 1.3;
// }
// console.log(calculateTax(10000, 2025));
// console.log(calculateTax(10000, 2027));

// // ========= Object ===========
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "dipesh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee;

// function kgToLbs(weight: number | string): number {
//   // narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }
// kgToLbs(10);
// kgToLbs("10");

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };
// textBox;

// // literal (exact, specified)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// quantity;
/* 
let price: number = 99.99;
let quantity: number = 2;
let total: number = price * quantity;

console.log(total);

let productName: string = "Wireless Mouse";
let category: string = "Electronics";

let message: string = `Product ${productName} costs ${price} EUR`;

console.log(category, message);
let isAvailable: boolean = true;
let isDiscountActive: boolean = false;
console.log(isAvailable, isDiscountActive);

let response: unknown;

// Putem atribui orice
response = "OK";
response = 42;
response = { status: "success" };
if (typeof response === "string") {
  console.log(response.toUpperCase());
}
let prices: number[] = [10, 20, 30];
let products: string[] = ["Laptop", "Phone", "Tablet"];
let quantities: Array<number> = [1, 2, 3];

console.log(prices, products, quantities);

let productInfo: [string, number, boolean] = ["Keyboard", 49.99, true];
console.log(productInfo); */

const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

loginBtn.addEventListener("click", function () {
  // Reference the 'Input' constants defined on lines 124-125
  let usernameValue: string = usernameInput.value;
  let passwordValue: string = passwordInput.value;

  console.log("Username:", usernameValue);
  console.log("Password:", passwordValue);
});

// let productName: string = "Laptop";
// let price: number = 999.99;
// let isAvailable: boolean = true;

// console.log(
//   `Product: ${productName}, Price: ${price}, Available: ${isAvailable}`,
// );

// class Product {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   getPrice(): number {
//     return this.price;
//   }
// }
// const product = new Product("Laptop", 1200);

// console.log(product.getPrice());
// console.log(product.name);

// class User {
//   public username: string; // disponibil peste tot
//   private password: string; // disponibil doar în interiorul clasei

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   // metodă pentru accesarea câmpului privat
//   checkPassword(input: string): boolean {
//     return input === this.password;
//   }
// }

// const user = new User("Ana", "12345");
// console.log(user.username); // OK
// console.log(user.checkPassword("12345")); // OK, returnează true
// // console.log(user.password); // Eroare! password este private
// // username este public, poate fi citit și modificat de oriunde
// // password este private, poate fi folosit doar în interiorul clasei (de exemplu, prin metoda checkPassword).

class Product {
  readonly id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product(1, "Laptop", 999.99);
console.log(product1.id);
console.log(
  `Product Name: ${product1.name} ${product1.id}, Price: ${product1.price}`,
);
// product1.id = 2; // Eroare! id este readonly, nu poate fi modificat după inițializare
product1.name = "Smartphone"; // OK, name nu este readonly
console.log(`Updated Product Name: ${product1.name}`);

class PriceCalculator {
  static calculateTotal(price: number, quantity: number): number {
    return price * quantity;
  }
}
console.log(PriceCalculator.calculateTotal(50, 3));

class DigitalProduct extends Product {
  fileSize: number;

  constructor(id: number, name: string, fileSize: number) {
    super(id, name + " (Digital)", 0); // apelăm constructorul clasei de bază
    this.fileSize = fileSize;
  }
}

const ebook = new DigitalProduct(2, "E-book", 5);
console.log(ebook.name);
console.log(ebook.fileSize);

class User {
  private constructor(
    public username: string,
    private password: number,
  ) {}

  public showdetails(): void {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

  static create(username: string, password: number): User {
    // validări sau alte logici pot fi adăugate aici
    return new User(username, password);
  }
}
// console.log(User.username); // Eroare! username este un câmp de instanță, nu poate fi accesat direct pe clasă
// Eroare! constructorul este privat, nu putem crea instanțe direct
// const user = new User("john_doe", 12345); // Eroare! constructorul este privat
const user = User.create("john_doe", 12345); // OK, folosim metoda statică pentru a crea o instanță
console.log(user.username);
// console.log(user.showdetails());
// console.log(user.password); // Eroare! password este private, nu poate fi accesat direct
type Product1 = {
  name: string;
  price: number;
  available: boolean;
};

let product2: Product1 = { name: "Keyboard", price: 50, available: true };
let product3: Product1 = { name: "Monitor", price: 300, available: false };
console.log(product2, product3); // false, deoarece sunt obiecte diferite în memorie
