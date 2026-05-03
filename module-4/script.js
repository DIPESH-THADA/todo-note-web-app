"use strict";
/* 
window.console.log("Hello, World!");

window.myVariable = "This is a string.";
window.myVariable = 42;
console.log(window.myVariable);

function sayHello() {
  console.log("Hello!");
}
window.sayHello();

let screenWidth = screen.width;
let screenHeight = screen.height;
let availableWidth = screen.availWidth;
let availableHeight = screen.availHeight;
let colourDepth = screen.colourDepth;
let pixelDepth = screen.pixelDepth;
let orientation = screen.orientation.type;
let orientationAngle = screen.orientation.angle;
// let location = window.location.href;
let protocol = window.location.protocol;
let host = window.location.host;
let pathname = window.location.pathname;
let search = window.location.search;
let hash = window.location.hash;
console.log(
  `Screen Width: ${screenWidth}
Screen Height: ${screenHeight}
Available Width: ${availableWidth}
Available Height: ${availableHeight}
Color Depth: ${colourDepth}
Pixel Depth: ${pixelDepth}
Orientation: ${orientation}
Orientation Angle: ${orientationAngle}
Location: ${location}
Protocol: ${protocol}
Host: ${host}
Pathname: ${pathname}
Search: ${search}
Hash: ${hash}`,
);
 */

// alert("This is an alert box!");

// let userInput = prompt("Please enter your name:");
// console.log(`User input: ${userInput}`);

// window.confirm("Do you want to proceed?")
//   ? console.log("User chose to proceed.")
//   : console.log("User chose not to proceed.");

/* let userConfirmed = window.confirm(
  "You are about to unsubscribe from newsletter list.",
);
if (userConfirmed) {
  alert("You are unsubscribed.");
} else {
  alert("You are not going to be unsubscribed.");
}

let quantity = prompt("How many products do you want to add to the cart?", "1");
if (quantity !== null) {
  alert("You have added " + quantity + " products to the cart.");
} else {
  alert("You didn't add products to the cart.");
} */

// const title = document.getElementById("title");
// document.title = "JavaScript - title";
// title.textContent = "JavaScript - title";

// let cards = document.getElementsByClassName("card");

// for (let i = 0; i < cards.length; i++) {
//   const hasSaleBadge = cards[i].querySelector(".sale-badge");
//   const hasDiscountPill = cards[i].querySelector(".discount-pill");
//   if (hasSaleBadge && hasDiscountPill) {
//     cards[i].classList.add("sale-border");
//   }
//   cards[i].style.border = "2px solid #ff3b30";
// }

const prices = document.getElementsByTagName("span");
for (let i = 0; i < prices.length; i++) {
  const price = prices[i].textContent;
  console.log("price:", price);
}

// const cards = document.getElementsByClassName("product-card"); // We go through all the product boxes
// for (let i = 0; i < cards.length; i++) {
//   const title = cards[i].querySelector(".product-title").textContent;
//   console.log(i + 1, "Product:", title);
// }

// document.querySelector(".product-title").textContent = "New Product Title";
// document.querySelectorAll(".product-title").forEach((el) => {
//   el.innerHTML = "Test";
// });

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("class", "product-img");
}

// const btns = document.getElementsByClassName("btn");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].style.background = "grey";
//   btns[i].style.color = "white";
// }

const productCards = document.getElementsByClassName("product-card");
for (let i = 0; i < productCards.length; i++) {
  // We check if the product has a discount (example: lower price than the original one)
  const oldPrice = productCards[i].getElementsByClassName("old-price")[0];
  if (oldPrice) {
    productCards[i].classList.add("sale"); //  Add 'Sale' class for styling
  }
}

// const cards = document.getElementsByClassName("product-card");
// for (let i = 0; i < cards.length; i++) {
//   const priceRow = cards[i].getElementsByClassName("price-row")[0];
//   if (priceRow) {
//     cards[i].removeChild(priceRow);
//   }
// }

const PROMOS = { promo10: 10, discount2026: 5, blackFriday: 15, VIP20: 20 };
let promoInput = document.getElementById("promoInput");
let applyBtn = document.getElementById("apply-btn");
let resultEl = document.getElementById("check-result");
applyBtn.addEventListener("click", function () {
  let promoCodeText = promoInput.value.trim();
  if (promoCodeText.length === 0) {
    resultEl.textContent = "Please enter a promo code.";
    return;
  }
  let isValid = promoCodeText in PROMOS;
  if (isValid) {
    resultEl.textContent = "Promo code accepted.";
    const totalEl = document.getElementById("totalVal");
    const discountEl = document.getElementById("discountVal");
    const subtotalEl = document.getElementById("subtotalVal");
    const subtotal = parseFloat(subtotalEl.textContent);
    let discount = 0;
    if (PROMOS[promoCodeText]) {
      let promoPercent = PROMOS[promoCodeText];
      discount = subtotal * (promoPercent / 100);
    }
    const total = subtotal - discount;
    discountEl.textContent = Math.round(discount).toString();
    totalEl.textContent = Math.round(total).toString();
  } else resultEl.textContent = "Promo code is not accepted.";
});
