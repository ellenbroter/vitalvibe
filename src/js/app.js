import { handleScroll } from './header.js';
import { revealSections } from './scrollReveal.js';
import { toggleNavbar, closeNavbar } from './navbar.js';

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navLinks, "click", closeNavbar);

window.addEventListener("scroll", handleScroll);
revealSections();
addEventOnElem(window, "scroll", revealSections);
