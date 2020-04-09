// sub-menu
let menuWithSubMenu = document.querySelector(".menu_list_with_submenu");
let subMenu = document.querySelector(".submenu_ctlg");

function showSubMenu() {
  if (subMenu.classList.contains("active_sub")) {
    goToPage("catalog.html");
  }

  subMenu.classList.add("submenu_ctlg-active");
  subMenu.classList.add("active_sub");
}

function goToPage(pageUrl) {
  document.location.href = pageUrl;
}

menuWithSubMenu.addEventListener("click", showSubMenu);
