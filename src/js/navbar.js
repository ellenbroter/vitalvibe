const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

const closeNavbar = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

export { toggleNavbar, closeNavbar };