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


const cartBtn = document.querySelectorAll(".cart-btn");
const cartAddition = document.querySelectorAll(".item_addition");


for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("click", () => {
    cartAddition[i].style.left = "0";
    cartAddition[i].style.zIndex = "1";
  });
}


closeBtn = document.querySelectorAll(".uil-times-circle");


for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    cartAddition[i].style.left = "-100%";
  });
}