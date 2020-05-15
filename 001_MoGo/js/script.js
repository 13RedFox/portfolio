"use strict";
const navBar = document.querySelector("#navBar");
const cd = document.querySelector(".navigation__mob");

document.addEventListener("scroll", () => {
  if (
    window.pageYOffset < navBar.clientHeight &&
    window.pageYOffset < cd.clientHeight
  ) {
    navBar.classList.remove("filled");
    cd.style.top = "20px";
    // toTop.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
    cd.style.top = "10px";
    // toTop.classList.add("filled");
  }
});

jQuery(document).ready(function () {
  if ($(".cd-stretchy-nav").length > 0) {
    var stretchyNavs = $(".cd-stretchy-nav");

    stretchyNavs.each(function () {
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find(".cd-nav-trigger");

      stretchyNavTrigger.on("click", function (event) {
        event.preventDefault();
        stretchyNav.toggleClass("nav-is-visible");
      });
    });

    $(document).on("click", function (event) {
      !$(event.target).is(".cd-nav-trigger") &&
        !$(event.target).is(".cd-nav-trigger span") &&
        stretchyNavs.removeClass("nav-is-visible");
    });
  }
});
