let div = document.querySelectorAll("#my-div").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    el.style.backgroundColor = "#00ccdd";
    el.style.scale = "1.3";
  });
  el.addEventListener("mouseleave", function () {
    el.innerHTML = "Mouse left the product";
    el.style.backgroundColor = "blueviolet";
    el.style.scale = "1";
  });

  let counter = 0;
  el.addEventListener("mousemove", function () {
    el.innerHTML = "Mouse is moving (" + counter + ")";
    counter++;
  });

  el.addEventListener("click", function () {
    el.style.animation = "none";
  });

  el.addEventListener("click", function () {
    el.innerHTML = "I got clicked!";
  });
});

/* let input = document.getElementById("search");
input.addEventListener("keyup", function () {
  console.log("User typed: " + input.value);
});

let email = document.getElementById("email");
let form = document.getElementById("signup");
email.addEventListener("blur", function () {
  console.log("Email field lost focus: " + email.value);
});
form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents page reloading
  alert("Form submitted!");
});

let product = document.getElementById("product");
product.addEventListener("touchstart", function () {
  console.log("User touched the product");
});
product.addEventListener("touchend", function () {
  console.log("User removed finger");
});
 */
// let items = document.getElementsByTagName("li");
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function (e) {
//     alert("You clicked: " + e.target.innerHTML);
//   });
// }

// let link = document.getElementById("the-link");
// link.addEventListener("click", preventDefaultEvent);
// function preventDefaultEvent(e) {
//   e.preventDefault();
//   console.log("Default event is prevented!");
//   return false;
// }

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
div1.addEventListener("click", eventHandler, stop);
div2.addEventListener("click", eventHandler);
div3.addEventListener("click", eventHandler);
function eventHandler(e) {
  console.log("Hello from " + this.id);
}

function stop() {
  div1.style.animation = "none";
}
