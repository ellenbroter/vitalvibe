import { handleScroll } from './header.js';
import { revealSections } from './scrollReveal.js';
import { toggleNavbar, closeNavbar } from './navbar.js';
import { firebaseConfig } from "/firebaseConfig"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

initializeApp(firebaseConfig)

const authService = getAuth();

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const signOutButton = document.querySelector(".sign-out-button");
const signUpButton = document.querySelector(".sign-up-button");
const errorMessage = document.querySelector(".error-message");

const frontPage = document.querySelector(".front-page");
const secretSection = document.querySelector(".secret-section");


signUpButton.addEventListener("click", (event)=> {
	event.preventDefault();
	createUserWithEmailAndPassword(authService, emailInput.value, passwordInput.value)
	.then(()=> {
		checkAuthStateAndRender();
	})
	.catch((error)=> {
		errorMessage.style.display = "block";
		errorMessage.textContent = error.message
	})
})

signInButton.addEventListener("click", (event)=> {
	event.preventDefault();
	signInWithEmailAndPassword(authService, emailInput.value, passwordInput.value)
	.then(()=> {
		checkAuthStateAndRender();
	})
	.catch((error)=> {
		errorMessage.style.display = "block";
		errorMessage.textContent = error.message
	})
})

signOutButton.addEventListener("click", ()=> {
	signOut(authService)
	.then(()=> {
		checkAuthStateAndRender();
		console.log("Signed out ✔︎");
	})
	.catch((error)=> {
		console.log(error.message);
	})
})

function checkAuthStateAndRender() {
	onAuthStateChanged(authService, (user)=> {
		if(user) {
			errorMessage.textContent = ""
			frontPage.style.display = "none";
			secretSection.style.display = "block";
			signOutButton.style.display = "block";
		} else {
			frontPage.style.display = "block";
			secretSection.style.display = "none";
			signOutButton.style.display = "none";
		}
	})
}

checkAuthStateAndRender()

/*

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
addEventOnElem(window, "scroll", revealSections); */
