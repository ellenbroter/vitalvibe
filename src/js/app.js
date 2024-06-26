import { handleScroll } from './header.js';
import { revealSections } from './scrollReveal.js';
import { toggleNavbar, closeNavbar } from './navbar.js';
import { firebaseConfig } from "../../firebaseConfig.js"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { sortCourses } from './sorting.js';
import { fetchFruits } from './fruitApi.js';

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


const validateForm = (email, password) => {
  if (!email.includes('@') || emailInput.length === 0) {
      return 'Email must contain an "@" symbol.';
  }
  if (password.length < 6 || passwordInput.length === 0) {
      return 'Password must be at least 6 characters long.';
  }
  return '';
}

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const validationError = validateForm(email, password);

  if (validationError) {
      errorMessage.style.display = "block";
      errorMessage.textContent = validationError;
  } else {
      createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
          checkAuthStateAndRender();
      })
      .catch((error) => {
          errorMessage.style.display = "block";
          errorMessage.textContent = 'Please use a valid email or password';
      });
  }
});

signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const validationError = validateForm(email, password);

  if (validationError) {
      errorMessage.style.display = "block";
      errorMessage.textContent = validationError;
  } else {
      signInWithEmailAndPassword(authService, email, password)
      .then(() => {
          checkAuthStateAndRender();
      })
      .catch((error) => {
          errorMessage.style.display = "block";
          errorMessage.textContent = 'Please use a valid email or password';
      });
  }
});


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


// Sorting
document.addEventListener("DOMContentLoaded", function() {
  const sortButtons = document.querySelectorAll('.sort-button');
  const courseList = document.querySelector('.list-items');

  sortButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sortBy = button.getAttribute('data-sort-by');
      sortCourses(courseList, sortBy);
    });
  });
});


// API
function updateFruitsList(fruits) {
  const fruitsListContainer = document.querySelector('.fruits-list');
  fruitsListContainer.innerHTML = '';

  fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = fruit.name;

    const cardMetaList = document.createElement('ul');
    cardMetaList.className = 'card-meta-list';

    const cardMetaItem = document.createElement('li');
    cardMetaItem.className = 'card-meta-item';

    const itemText = document.createElement('p');
    itemText.className = 'item-text';
    itemText.textContent = 'Nutritions (per 100g)';

    cardMetaItem.appendChild(itemText);
    cardMetaList.appendChild(cardMetaItem);

    const cardAuthor = document.createElement('ul');
    cardAuthor.className = 'card-author';

    const createCardLink = (label, value) => {
      const cardLink = document.createElement('li');
      cardLink.className = 'card-link';
      cardLink.innerHTML = `${label}: <span class="span">${value}</span>`;
      return cardLink;
    };

    cardAuthor.appendChild(createCardLink('Calories', fruit.nutritions.calories));
    cardAuthor.appendChild(createCardLink('Fat', fruit.nutritions.fat));
    cardAuthor.appendChild(createCardLink('Sugar', fruit.nutritions.sugar));
    cardAuthor.appendChild(createCardLink('Carbohydrates', fruit.nutritions.carbohydrates));
    cardAuthor.appendChild(createCardLink('Protein', fruit.nutritions.protein));

    wrapper.appendChild(cardTitle);
    wrapper.appendChild(cardMetaList);
    wrapper.appendChild(cardAuthor);

    blogCard.appendChild(wrapper);
    listItem.appendChild(blogCard);
    fruitsListContainer.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchFruits()
    .then(limitedFruits => updateFruitsList(limitedFruits))
    .catch(error => console.error('Error fetching and updating fruits:', error));
});