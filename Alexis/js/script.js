window.onload = function() {
  let preloader = document.getElementById("loader");
  preloader.style.display = "none";
};

window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  let notFixedMenu = document.getElementById("fixed");

  if (scrolled > 100) {
    notFixedMenu.classList.add("fixed");
  } else {
    notFixedMenu.classList.remove("fixed");
  }
};

function classToggle() {
    this.classList.toggle("menu_toggle");
    this.classList.toggle("menu_active_2");
    document.querySelector(".main_menu").classList.toggle("menu_active");
}

document.querySelector(".menu_toggle").addEventListener("click", classToggle);
