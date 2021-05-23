/*---MENU ---*/
const navMenu = document.getElementById("navigation-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navBar = document.getElementById("hamburger");

/*--- MENU SHOW ---*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navBar.classList.toggle("is-active");
    navMenu.classList.toggle("show-menu");
  });
}

/*---REMOVE MENU MOBILE ---*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("navigation-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  navBar.classList.toggle("is-active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
