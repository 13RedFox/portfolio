"use strict";

const navBar = document.getElementById("navBar");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileNav");

document.addEventListener("scroll", () =>
  window.pageYOffset < navBar.clientHeight
    ? navBar.classList.remove("filled")
    : navBar.classList.add("filled")
);

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
