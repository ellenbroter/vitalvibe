const sections = document.querySelectorAll("[data-section]");

const revealSections = () => {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

export { revealSections };