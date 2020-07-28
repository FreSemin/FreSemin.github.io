const menuBtns = document.querySelectorAll(".menu-cont");
const menuBlock = document.querySelector(".menu");
const menuBtnClose = document.getElementById("menu-btn-close");

function menuShow() {
  menuBlock.classList.remove("menu_disabled");
  
  menuBlock.classList.add("menu_active");

  document.body.style.overflow = "hidden"; // Hide Scroll
}

function menuHide() {
  menuBlock.classList.remove("menu_active");

  menuBlock.classList.add("menu_disabled");

  document.body.style.overflow = "visible"; // Show Scroll
}

menuBtns.forEach((btnElement) => {
  btnElement.addEventListener("click", menuShow);
});

menuBtnClose.addEventListener("click", menuHide);
