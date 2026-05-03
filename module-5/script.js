// $("#btn").click(function () {
//   alert("welcome to jQuery");
// });

/* $(function () {
  $("#login-form").on("submit", function (e) {
    e.preventDefault();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    if (email === "" && password === "") {
      alert("Please enter your email and password.");
      return;
    }
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }
    alert(
      "Email: " + $("#email").val() + "\nPassword: " + $("#password").val(),
    );
  });
});

let allInputs = $("#login-form input");
console.log(allInputs.length);

let inputs = $("input");
let domObject = inputs[0];
let jQueryObject = inputs.eq(0);

console.log(inputs, domObject, jQueryObject);

$(function () {
  $(".btn-add").on("click", function () {
    //1) parent() -> reaches parent (box)
    const card = $(this).parent();
    // 2) attr() -> reads data from parent attributes
    const id = card.attr("data-id");
    const name = card.attr("data-name");
    const price = card.attr("data-price");
    //3) Display the result
    alert("Added to cart:\n" + name + " (ID: " + id + ") - $" + price);
  });
});

$(function () {
  // 1) each() - parcurge fiecare buton Re-order și setează "title"
  $(".reorder-btn").each(function () {
    const orderId = $(this).parents(".order-row").attr("data-order-id");
    $(this).attr("title", "Re-order for #" + orderId);
  });

  // 2) prop() - dezactivează Re-order dacă statusul nu este "Completed"
  $(".order-row").each(function () {
    const statusText = $(this).find("td:nth-child(3)").text().trim(); // coloana Status
    const button = $(this).find(".reorder-btn");

    if (statusText !== "Completed") {
      button.prop("disabled", true); // prop() deoarece disabled este o proprietate boolean
    }
  });

  // 3) Clic pe Re-order - folosește parents() pentru a ajunge la rând și a citi datele
  $(".reorder-btn").on("click", function () {
    const row = $(this).parents(".order-row");

    const orderId = row.attr("data-order-id");
    const total = row.find("td:nth-child(4)").text().trim(); // coloana Total
    const status = row.find("td:nth-child(3)").text().trim(); // Status kolona coloana Status

    alert(
      "Re-order:\nOrder #" +
        orderId +
        "\nStatus: " +
        status +
        "\nTotal: " +
        total,
    );
  });
}); */

// $(".reorder-btn").on("click", function () {
//   const row = $(this).parents(".order-row");

//   const tds = row.children("td"); // copii direcți ai rândului: elementele td
//   const order = $(tds[0]).find(".order-id").text().trim();
//   const date = $(tds[1]).text().trim();
//   const status = $(tds[2]).text().trim();
//   const total = $(tds[3]).text().trim();

//   alert(order + "\n" + date + "\n" + status + "\n" + total);
// });

// $(".reorder-btn").on("click", function () {
//   const row = $(this).parents(".order-row");

//   const orderText = row.find(".order-id").text().trim(); // npr. "#6552331"
//   const detailsHref = row.find(".view-details").attr("href"); // npr. "order-details.html?id=..."

//   alert("Re-order for " + orderText + "\nDetails link: " + detailsHref);
// });

// $(".view-details").on("click", function (e) {
//   e.preventDefault();

//   const row = $(this).parents(".order-row");

//   const orderId = row.attr("data-order-id");
//   const status = row.find("td:nth-child(3)").text().trim();
//   const total = row.find("td:nth-child(4)").text().trim();

//   alert("Order #" + orderId + "\nStatus: " + status + "\nTotal: " + total);
// });

// $(function () {
//   $(".reorder-btn").on("click", function () {
//     // buton -> td în care se află butonul
//     const actionTd = $(this).parents("td");

//     // frații acelui td sunt celelalte coloane din același rând
//     const status = actionTd.siblings().eq(2).text().trim(); // 3. coloană = Status
//     const total = actionTd.siblings().eq(3).text().trim(); // 4. coloană = Total

//     // Order ID este în prima coloană, dar în ea se află și elementul .order-id
//     const order = actionTd.siblings().eq(0).find(".order-id").text().trim();

//     alert("Re-order:\n" + order + "\nStatus: " + status + "\nTotal: " + total);
//   });
// });

// let elements = $(".orders-table").children();
// console.log(elements.text());
// let firstElem = elements.first();
// console.log(firstElem.text());

// let specificElem = elements.eq(1);
// console.log(specificElem.text());

// $(function () {
//   // Toate rândurile comenzilor
//   const allRows = $(".order-row");

//   // Le filtrăm doar pe cele cu status "Completed"
//   const completedRows = allRows.filter(function () {
//     const status = $(this).find("td:nth-child(3)").text().trim();
//     return status === "Completed";
//   });

//   alert("Număr de comenzi completed: " + completedRows.length);
// });

// $(function () {
//   // 1) Mai întâi găsim toate rândurile completed (filter)
//   const completed = $(".order-row").filter(function () {
//     return $(this).find("td:nth-child(3)").text().trim() === "Completed";
//   });

// 2) Toate cele care NU sunt completed le obținem prin not()
//   const notCompleted = $(".order-row").not(completed);

//   // 3) Dezactivăm Re-order pentru aceste rânduri
//   notCompleted
//     .find(".reorder-btn")
//     .prop("disabled", true)
//     .addClass("opacity-50");

//   alert("Comenzi care nu sunt completed: " + notCompleted.length);
// });

// $(document).ready(function () {
//   $("#my-button").click(function () {
//     alert("The element was clicked.");
//   });
// });

// $("#my-button").on("click", function () {
//   alert("The element was clicked.");
// });

// $("#my-button").on({
//   mouseenter: function () {
//     console.log("mouse entered button");
//   },
//   mouseleave: function () {
//     $("#my-btn").css("background-color", "#abe");
//     console.log("mouse left button");
//   },
//   click: function () {
//     console.log("button clicked");
//   },
// });

// Qty +/- basic
/* const qtyVal = document.getElementById("qtyVal");
document.getElementById("qtyMinus").addEventListener("click", () => {
  let v = parseInt(qtyVal.textContent, 10);
  if (v > 1) qtyVal.textContent = String(v - 1);
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  let v = parseInt(qtyVal.textContent, 10);
  qtyVal.textContent = String(v + 1);
});

$(function () {
  $(".size-pill").on("click", function () {
    const wrapper = $(this).parent(); // <div class="d-flex gap-2 flex-wrap">
    wrapper.children(".size-pill").removeClass("active"); // elimină active de la toate
    $(this).addClass("active"); // adaugă active la clicul curent
  });
});

// let h1Text = $("#heading1").text();
// console.log(h1Text);
let h1Text = $("#heading1").html();
console.log(h1Text); */

$(function () {
  // Exemplu de coduri promo valide
  // percent: 10 înseamnă 10% reducere
  // fixed: 15 înseamnă $15 reducere
  const PROMOS = {
    SAVE10: { type: "percent", value: 10 },
    WELCOME15: { type: "fixed", value: 15 },
    VIP20: { type: "percent", value: 20 },
  };

  let appliedPromo = null; // stochează promoția activă (de exemplu "SAVE10")

  function formatMoney(n) {
    return Math.max(0, Math.round(n)).toString();
  }

  function getSubtotal() {
    let subtotal = 0;
    $(".cart-row").each(function () {
      const price = parseFloat($(this).attr("data-price"));
      const qty = parseInt($(this).find(".qty").text(), 10);
      subtotal += price * qty;
    });
    return subtotal;
  }

  function calcDiscount(subtotal) {
    if (!appliedPromo) return 0;

    const promo = PROMOS[appliedPromo];
    if (!promo) return 0;

    let discount = 0;

    if (promo.type === "percent") {
      discount = subtotal * (promo.value / 100);
    } else if (promo.type === "fixed") {
      discount = promo.value;
    }

    //  reducerea nu poate fi mai mare decât subtotalul
    discount = Math.min(discount, subtotal);
    return discount;
  }

  function recalcTotals() {
    const subtotal = getSubtotal();
    const discount = calcDiscount(subtotal);
    const total = subtotal - discount;

    $("#subtotalVal").text(formatMoney(subtotal));
    $("#discountVal").text(formatMoney(discount));
    $("#totalVal").text(formatMoney(total));
  }

  // apply promo
  $("#applyPromo").on("click", function () {
    const code = $("#promoInput").val().trim().toUpperCase();

    if (code === "") {
      alert("Introduceți codul promoțional.");
      return;
    }

    if (!PROMOS[code]) {
      appliedPromo = null; // elimină promoția dacă nu e validă
      alert("Codul promoțional nu este valid.");
      recalcTotals();
      return;
    }

    appliedPromo = code; // salvează promoția validă
    alert("Codul promoțional aplicat: " + code);
    recalcTotals();
  });

  // initial
  recalcTotals();
});

$("#name").val("default name");
let nameValue = $("#name").val();
