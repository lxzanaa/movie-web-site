let hamburgerIcon = document.querySelector("#hamburger-icon");
let headerResponsiveMenuTopClose = document.querySelector("#header-responsive-menu-top-close");
let headerResponsiveMenu = document.querySelector("#header-responsive-menu");

hamburgerIcon.addEventListener("click", function () {
  headerResponsiveMenu.classList.remove("-left-full");
  headerResponsiveMenu.classList.add("left-0");
});

headerResponsiveMenuTopClose.addEventListener("click", function () {
  headerResponsiveMenu.classList.add("-left-full");
  headerResponsiveMenu.classList.remove("left-0");
});
