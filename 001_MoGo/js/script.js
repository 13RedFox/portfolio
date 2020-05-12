"use strict";

const navBar = document.getElementById("navBar");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileNav");

document.addEventListener("scroll", () => {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("filled");
    // toTop.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
    // toTop.classList.add("filled");
  }
});

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
