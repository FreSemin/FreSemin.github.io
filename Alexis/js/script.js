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

function showMenu() {
  this.classList.toggle("menu_toggle");
  this.classList.toggle('menu_active_2');
  document.querySelector(".main_menu").classList.toggle("menu_active");
}

function hideMenu() {
  document.querySelector('.menu_active_2').classList.toggle("menu_toggle");
  document.querySelector('.menu_toggle').classList.toggle("menu_active_2");
  document.querySelector(".main_menu").classList.toggle("menu_active");
}

document.querySelector('.menu_toggle').addEventListener('click', showMenu);
document.querySelector('.main_menu').addEventListener('click', hideMenu);

