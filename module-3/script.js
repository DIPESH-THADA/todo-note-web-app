"use strict";
/* let number_a = prompt("Please enter first number:");
let number_b = prompt("Please enter second number:");
if (number_a > number_b) {
  alert("Number " + number_a + " is greater than " + number_b);
} else {
  alert("Number " + number_b + " is greater than " + number_a);
}

// Try entering different combinations of numbers (for example, negative, zero, or equal numbers) into the function.
// What happens if the user doesn't enter anything or enters text instead of a number?
// Try to track the results using console.log() and identify where the program is not behaving as expected.

console.log("Number A:", number_a);
console.log("Number B:", number_b);

if (isNaN(number_a) || isNaN(number_b)) {
  alert("Please enter valid numbers.");
}
 */

/* let number_a = prompt("Please enter first number:");
let number_b = prompt("Please enter second number:");

number_a = parseInt(number_a);
number_b = parseInt(number_b);
console.log(number_a, typeof number_a);
if (number_a > number_b) {
  alert("Number " + number_a + " is greater than " + number_b);
} else if (number_a < number_b) {
  alert("Number " + number_b + " is greater than " + number_a);
} else {
  alert("Both numbers are equal.");
} */

const items = [
  { name: "ricou", price: "150" },
  { name: "Adidași", price: "899" },
];

function calculateCart() {
  const qty1 = document.getElementById("qty1").value;
  const qty2 = document.getElementById("qty2").value;
  let coupon = document.getElementById("coupon").value.trim().toUpperCase();
  let freeShip = false;

  let subtotal = items[0].price * qty1 + items[1].price * qty2;

  let discount = 0;
  if (coupon === "SAVE10") {
    discount = Math.round(subtotal * 0.1);
  } else if (coupon === "FREESHIP") {
    freeShip = true;
  }

  const vat = subtotal * 0.13;

  // livrarea gratuită trebuie să se aplice pentru sume >= 1000
  let shipping = subtotal >= 1000 ? 0 : 50;
  if (subtotal - discount > 1000) shipping = 0;
  if (freeShip) shipping = 0;

  const total = subtotal - discount + vat + shipping;

  document.getElementById("out").textContent = `Subtotal: ${subtotal} RON\n 
        Reducere: ${discount} RON\n
        TVA: ${vat} RON\n
        Livrare: ${shipping} RON\n
        Total: ${total} RON`;
}

document.getElementById("btn").addEventListener("click", calculateCart);

/* function compare(a, b) {
  let number_a = parseInt(a);
  let number_b = parseInt(b);
  if (number_a > number_b) {
    alert("Number " + number_a + " is greater then " + number_b);
  } else if (number_b > number_a) {
    alert("Number " + number_b + " is greater then " + number_a);
  } else {
    alert("Numbers are equal.");
  }
}

compare("10", "5");
compare("5", "10");
compare("5", "5");
 */

let number_a = prompt("Please enter first number:");
let number_b = prompt("Please enter second number:");
let result = compare(number_a, number_b);
switch (result) {
  case 1:
    alert("Number " + number_a + " is greater then " + number_b);
    break;
  case -1:
    alert("Number " + number_b + " is greater then " + number_a);
    break;
  case 0:
    alert("Numbers are equal.");
    break;
}
function compare(a, b) {
  let number_a = parseInt(a);
  let number_b = parseInt(b);
  if (number_a > number_b) {
    return 1;
  } else if (number_b > number_a) {
    return -1;
  } else {
    return 0;
  }
}

console.log(compare("10", "5"));
console.log(compare("5", "10"));
console.log(compare("5", "5"));
