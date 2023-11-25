"use strict";

let menuBtn, menuLinks;

function toggleMenu() {
  if (menuBtn.checked) {
    menuBtn.checked = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Start WOW library
  new WOW().init();

  menuBtn = document.getElementById("menu-check");
  menuLinks = document.querySelectorAll(".menu-list__item-link");
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", toggleMenu);
  });
});
