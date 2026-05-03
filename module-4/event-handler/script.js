//    We find the button and save it in a variable
// let button = document.getElementById("the-button"); //We associate the function with the click event
// button.onclick = displayMessage;
// function displayMessage() {
//   alert("Product added to Cart!");
// }

// let button = document.getElementById("the-button");
// button.onclick = displayMessage;
// button.onclick = displayAnotherMessage;
// function displayMessage() {
//   alert("hello there");
// }
// function displayAnotherMessage() {
//   alert("hello again");
// }

// let button = document.getElementById("the-button");
// //We associate the click event with the Login  function
// button.addEventListener("click", Login);
// function Login() {
//   alert("Login successful!");
// }

// button.addEventListener("mouseover", Login);
/* function subscribe() {
  alert("You have subscribed to our newsletter!");
}

function unsubscribe() {
  alert("You have unsubscribed from our newsletter!");
}

let button = document.getElementById("the-button");
// button.addEventListener("click", unsubscribe);

function styleButton() {
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.fontSize = "20px";
}

let inputField = document.getElementById("email");
let validUser = {
  email: inputField.value,
};

function validateEmail() {
  if (
    inputField.value === validUser.email &&
    inputField.value.includes("@") &&
    inputField.value.includes(".com")
  ) {
    alert("Email is valid!");
  } else {
    alert("Email is invalid!");
  }
}

button.addEventListener("click", validateEmail);
button.addEventListener("click", styleButton);
button.addEventListener("click", subscribe);
button.addEventListener("click", unsubscribe); */

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("the-button");
  button.addEventListener("click", displayMessage);
});
function displayMessage() {
  alert("Product added to Cart!");
}

let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  let userNameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");

  let userName = userNameInput.value.trim();
  let password = passwordInput.value.trim();

  if (userName === "" && password === "") {
    alert("Please fill in both username and password.");
  }
  if (userName === "") {
    alert("Please enter your username.");
  }

  if (password === "") {
    alert("Please enter your password.");
    return;
  }

  // If both fields are filled, you can proceed with form submission or further validation
  alert("Login successful!");
});

document.addEventListener("readystatechange", function () {
  if (document.readyState === "interactive") {
    // DOM is ready
  }
  if (document.readyState === "complete") {
    //Everything has been uploaded
  }
});
