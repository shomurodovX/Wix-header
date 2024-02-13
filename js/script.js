const mysite_btn = document.querySelector(".mysite_btn");
const dropdown1 = document.querySelector(".dropdown1");

document.addEventListener("click", function () {
  dropdown1.classList.remove("dropdown1_active");
});

mysite_btn.addEventListener("click", function (event) {
  dropdown1.classList.toggle("dropdown1_active");
  dropdown.classList.remove("dropdown_active");
  inbox_dropdown.classList.remove("inbox_active");
  notif_dropdown.classList.remove("notif_active");
  account_dropdown.classList.remove("account_active");
  event.stopPropagation();
});

// dropdown2

const dropdown_btn = document.querySelector(".dropdown_btn");
const dropdown = document.querySelector(".dropdown");

document.addEventListener("click", function () {
  dropdown.classList.remove("dropdown_active");
});

dropdown_btn.addEventListener("click", function (event) {
  dropdown.classList.toggle("dropdown_active");
  dropdown1.classList.remove("dropdown1_active");
  inbox_dropdown.classList.remove("inbox_active");
  notif_dropdown.classList.remove("notif_active");
  account_dropdown.classList.remove("account_active");
  event.stopPropagation();
});

// inbox
const inbox_dropdown = document.querySelector(".inbox_dropdown");
const inbox_btn = document.querySelector(".inbox_btn");

document.addEventListener("click", function (event) {
  const isClickedInsideDropdown = inbox_dropdown.contains(event.target);
  const isClickedOnButton = account.contains(event.target);

  if (!isClickedInsideDropdown && !isClickedOnButton) {
    inbox_dropdown.classList.remove("inbox_active");
  }
});

inbox_btn.addEventListener("click", function (event) {
  inbox_dropdown.classList.toggle("inbox_active");
  dropdown1.classList.remove("dropdown1_active");
  dropdown.classList.remove("dropdown_active");
  notif_dropdown.classList.remove("notif_active");
  account_dropdown.classList.remove("account_active");
  event.stopPropagation();
});

// Notification
const notif_dropdown = document.querySelector(".notif_dropdown");
const notif_btn = document.querySelector(".notif_btn");

document.addEventListener("click", function (event) {
  const isClickedInsideDropdown = notif_dropdown.contains(event.target);
  const isClickedOnButton = notif_btn.contains(event.target);

  if (!isClickedInsideDropdown && !isClickedOnButton) {
    notif_dropdown.classList.remove("notif_active");
  }
});

notif_btn.addEventListener("click", function (event) {
  notif_dropdown.classList.toggle("notif_active");
  dropdown1.classList.remove("dropdown1_active");
  dropdown.classList.remove("dropdown_active");
  inbox_dropdown.classList.remove("inbox_active");
  account_dropdown.classList.remove("account_active");
  event.stopPropagation();
});

// account

const account_dropdown = document.querySelector(".account_dropdown");
const account = document.querySelector(".account");

document.addEventListener("click", function (event) {
  const isClickedInsideDropdown = account_dropdown.contains(event.target);
  const isClickedOnButton = account.contains(event.target);

  if (!isClickedInsideDropdown && !isClickedOnButton) {
    account_dropdown.classList.remove("account_active");
  }
});

account.addEventListener("click", function (event) {
  account_dropdown.classList.toggle("account_active");
  dropdown1.classList.remove("dropdown1_active");
  dropdown.classList.remove("dropdown_active");
  inbox_dropdown.classList.remove("inbox_active");
  notif_dropdown.classList.remove("notif_active");
  event.stopPropagation();
});

// burger
const bars = document.querySelector(".bars");
const header_links = document.querySelector(".header_links");

bars.addEventListener("click", function () {
  header_links.classList.toggle("nav_active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 990) {
    header_links.classList.remove("nav_active");
  }
});
