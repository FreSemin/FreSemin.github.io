window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  let notFixedMenu = document.querySelector(".menu");
  let darkLogo = document.getElementById("dark_logo");
  let lightLogo = document.getElementById("light_logo");

  if (scrolled > 0) {
    notFixedMenu.classList.add("fixed");
    darkLogo.style.display = "block";
    lightLogo.style.display = "none";
  } else {
    notFixedMenu.classList.remove("fixed");
    darkLogo.style.display = "none";
    lightLogo.style.display = "block";
  }
};

function classToggle() {
  this.classList.toggle("active");
  this.classList.toggle("menu_close");

  document.querySelector(".menu").classList.toggle("mobile_menu");
  document.querySelector(".main-menu").classList.toggle("mobile_main_menu");
  document.querySelector(".mobile_social").classList.toggle("active");
}

function hideMenu() {
  document.querySelector(".menu_toggle").classList.remove("active");
  document.querySelector(".menu_toggle").classList.remove("menu_close");

  document.querySelector(".menu").classList.remove("mobile_menu");
  document.querySelector(".main-menu").classList.remove("mobile_main_menu");
  document.querySelector(".mobile_social").classList.remove("active");
}

document.querySelector(".menu_toggle").addEventListener("click", classToggle);

document.querySelector(".menu_list").addEventListener("click", hideMenu);
