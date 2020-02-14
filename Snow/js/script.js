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

  // document.querySelector('body').classList.toggle('test');

  // document.querySelector('.light_logo').classList.toggle('active'); // если что поменяй на класс логотип

  // document.getElementById('light_logo').style.display = 'block';
  // document.getElementById('dark_logo').style.display = 'none';

  // if (scrolled > 0) {
  //   document.getElementById('dark_logo').classList.toggle('active');
  //   document.getElementById('light_logo').classList.toggle('not-active');

  //   this.classList.toggle('active');
  //   this.classList.toggle('menu_close');

  //   document.querySelector(".menu").classList.toggle("mobile_menu");
  //   document.querySelector('.main-menu').classList.toggle('mobile_main_menu');
  //   document.querySelector(".mobile_social").classList.toggle('active');
  // } else {
  //   this.classList.toggle('active');
  //   this.classList.toggle('menu_close');

  //   document.querySelector(".menu").classList.toggle("mobile_menu");
  //   document.querySelector('.main-menu').classList.toggle('mobile_main_menu');
  //   document.querySelector(".mobile_social").classList.toggle('active');

  //   document.getElementById('dark_logo').classList.toggle('not-active');
  //   document.getElementById('light_logo').classList.toggle('active');
  // }

  // darkLogo.style.display = 'block';
}

document.querySelector(".menu_toggle").addEventListener("click", classToggle);

// 2 способ
// function toggleShow() {
//   this.classList.add('active');
//   this.classList.add('menu_close');
//   this.classList.remove('menu_toggle');

//   document.querySelector(".menu").classList.add("mobile_menu");
//   document.querySelector('.main-menu').classList.add('mobile_main_menu');
//   document.querySelector(".mobile_social").classList.add('active');

//   document.getElementById('light_logo').style.display = 'block';
//   document.getElementById('dark_logo').style.display = 'none';

//   document.querySelector('.menu_close').addEventListener('click', toggleHide);
// }
// function toggleHide() {
//   this.classList.add('menu_toggle');
//   this.classList.remove('active');
//   this.classList.remove('menu_close');

//   document.querySelector(".menu").classList.remove("mobile_menu");
//   document.querySelector('.main-menu').classList.remove('mobile_main_menu');
//   document.querySelector(".mobile_social").classList.remove('active');

//   document.querySelector('.menu_toggle').addEventListener('click', toggleShow);

// }

// // document.querySelector('.menu_toggle').addEventListener('click', toggleShow);
