// Mini eCommerce Debug Lab - JS

const products = [
  { id: 1, name: "Basic T-Shirt", price: 19, stock: 5 },
  { id: 2, name: "Denim Jacket", price: 79, stock: 3 },
  { id: 3, name: "Running Sneakers", price: 120, stock: 2 }
];

let cart = [];
let discount = 0;

const addButtons = document.querySelectorAll(".addtocard");

const cartItemsEl = document.getElementById("cart-items"); 
const totalPriceEl = document.getElementById("totalprice");

function renderCart() {
  cartItemsEl.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.textContent = `${item.name} x${item.qty} - $${item.price}`;
    cartItemsEl.appendChild(div);
  });

  total = total - discount;

  totalPriceEl.textContent = "$" + total.toFixed(2);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product.stock <= 0) {
    alert("Out of stock!");
    return;
  }

  const existing = cart.find(i => i.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  product.stock -= 1;

  renderCart();
}

addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const id = card.dataset.id;
    addToCart(id);
  });
});

// Coupon
document.getElementById("apply-coupon").addEventListener("click", () => {
  const code = document.getElementById("coupon-input").value;

  if (code === "SAVE10") {
    discount = 0.1;
    document.getElementById("coupon-status").textContent = "Coupon applied: 10% off!";
  } else {
    discount = 0;
    document.getElementById("coupon-status").textContent = "Invalid coupon.";
  }

  renderCart();
});

// Clear cart
document.getElementById("clear-cart").addEventListener("click", () => {
  cart = [];
  discount = 5;
  renderCart();
});
