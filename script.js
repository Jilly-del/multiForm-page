"use script";
let form = document.getElementById("form");
let plan = document.querySelector(".plan");
let planh = document.querySelector(".plan-btnh");
let planbtn = document.querySelector(".plan-btnx");
let addon = document.querySelector(".add-on");
let addbtn = document.querySelector(".add-btn");
let addh = document.querySelector(".add-h");
let finish = document.querySelector(".finishing-up");
let finishBtn = document.querySelector(".finish-btnx");
let finishH = document.querySelector(".finish-H");
let thank = document.querySelector(".thanks");
let one = document.getElementById("one");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let isvalid = true;

  // Name
  if (!name) {
    nameError.classList.add("show");
    isvalid = false;
  }
  if (!email) {
    emailError.classList.add("show");
    isvalid = false;
  }

  if (!phone) {
    phoneError.classList.add("show");
    isvalid = false;
  }

  if (isvalid) {
    form.classList.add("hidden");
    plan.classList.remove("hidden");
    one.style.backgroundColor = "none";
  }
});

planbtn.addEventListener("click", function () {
  plan.classList.add("hidden");
  addon.classList.remove("hidden");
});

planh.addEventListener("click", function () {
  form.classList.remove("hidden");
  plan.classList.add("hidden");
});

addbtn.addEventListener("click", function () {
  addon.classList.add("hidden");
  finish.classList.remove("hidden");
});
addh.addEventListener("click", function () {
  plan.classList.remove("hidden");
  addon.classList.add("hidden");
});

finishBtn.addEventListener("click", function () {
  finish.classList.add("hidden");
  thank.classList.remove("hidden");
});
finishH.addEventListener("click", function () {
  finish.classList.add("hidden");
  addon.classList.remove("hidden");
});
