let content = document.querySelector(".content");
let plan = document.querySelector(".plan");
let planH = document.querySelector(".plan-h");
let planBtn = document.querySelector(".plan-btnx");
let planActive = document.querySelectorAll(".active");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document
    .querySelectorAll(".error")
    .forEach((error) => error.classList.remove("show"));

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  let isValid = true;

  //   if (!name) {
  //     document.getElementById("nameError").classList.add("show");
  //     isValid = false;
  //   }
  //   if (!email) {
  //     document.getElementById("emailError").classList.add("show");
  //     isValid = false;
  //   }

  //   if (!phone) {
  //     document.getElementById("phoneError").classList.add("show");
  //     isValid = false;
  //   }

  if (isValid) {
    content.style.display = "none";
    plan.style.display = "block";
  }
});

planH.addEventListener("click", function (e) {
  e.preventDefault();
  plan.style.display = "none";
  content.style.display = "block";
});

// planActive.forEach((el) => {
//   el.classList.remove("active");
//   el.addEventListener("click", function (el) {
//     el.target.classList.add("active");
//   });
// });
