// LOGIN

// import { showLoginForm, handleSignIn, closeLoginForm } from './login.js';
// showLoginForm(); 
// handleSignIn(); 
// closeLoginForm();


// advantages.js
import { setupAdvantages } from './advantages.js';
setupAdvantages();

// counter.js
import { setupCounter } from './counter.js';
setupCounter();

// slider.js
import './slider.js';

// email.js
import { sendMessage, form, nameInput, emailInput, messageInput } from './email.js';

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const name = nameInput.value;
		const email = emailInput.value;
		const message = messageInput.value;
		sendMessage(name, email, message);
	});
}

// freeform.js
import { formElement, formSubmitHandler } from './freeform.js';
if (formElement) {
	formElement.addEventListener("submit", formSubmitHandler);
}

// redirect.js
import {
	redirectedToHomePage,
	redirectToFreePage,
	redirectToFreeLog,
	redirectToServicesPage,
	redirectTo404Page
} from './redirect.js';

// event
const loginButton = document.getElementById('loginButton');
const logo = document.querySelector('.header__logo-wrap');
const mainLoginButton = document.querySelector('.main__login-btn');
const freeButton = document.getElementById('freeButton');
const mainFreeButton = document.querySelector('.main__free-btn');
const freeAnimation = document.querySelector('.main__btn-free');
const viewServices = document.querySelector('.main__services-btn');
const mainNumberFree = document.querySelector('.main__number-btn');
const header = document.querySelector('header');
const partnersButton = document.querySelector('.main__partners-btns');
const tryFreeButtons = document.querySelectorAll('.main__price-btn');
const homeButtons = document.querySelectorAll('.main__home-btn');

// event listeners
if (logo) {
	logo.addEventListener('click', redirectedToHomePage);
}

if (header) {
	header.addEventListener('click', (event) => {
		if (event.target.id === 'freeButton' || event.target.classList.contains('main__free-btn')) {
			redirectToFreePage();
		}
	});
}

if (mainLoginButton) {
	mainLoginButton.addEventListener('click', showLoginForm);
}

if (loginButton) {
	loginButton.addEventListener('click', showLoginForm);
}

if (freeButton) {
	freeButton.addEventListener('click', redirectToFreePage);
}

if (mainFreeButton) {
	mainFreeButton.addEventListener('click', redirectToFreePage);
}

if (viewServices) {
	viewServices.addEventListener('click', redirectToServicesPage);
}

if (mainNumberFree) {
	mainNumberFree.addEventListener('click', redirectToFreePage);
}

if (freeAnimation) {
	freeAnimation.addEventListener('click', redirectToFreePage);
}

if (partnersButton) {
	partnersButton.addEventListener('click', redirectTo404Page);
}

if (tryFreeButtons) {
	tryFreeButtons.forEach((button) => {
		button.addEventListener('click', redirectToFreeLog);
	});
}

if (homeButtons) {
	homeButtons.forEach((button) => {
		button.addEventListener('click', redirectedToHomePage);
	});
}


// LOGIN
function showLoginForm() {
	const formOverlay = document.createElement('div');
	formOverlay.classList.add('form-overlay');

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container');

	const logoImage = document.createElement('img');
	logoImage.setAttribute('src', '../img/logo/logo.png');
	logoImage.classList.add('logo-image');

	const usernameLabel = document.createElement('label');
	usernameLabel.innerText = 'Username or email address';
	usernameLabel.classList.add('form-label');

	const usernameInput = document.createElement('input');
	usernameInput.setAttribute('type', 'text');
	usernameInput.setAttribute('placeholder', 'Username or email');
	usernameInput.classList.add('username-input');

	const passwordLabel = document.createElement('label');
	passwordLabel.innerText = 'Password';
	passwordLabel.classList.add('form-label');

	const passwordInput = document.createElement('input');
	passwordInput.setAttribute('type', 'password');
	passwordInput.setAttribute('placeholder', 'Password');
	passwordInput.classList.add('password-input');

	const forgotPasswordLink = document.createElement('a');
	forgotPasswordLink.setAttribute('href', '404.html');
	forgotPasswordLink.innerText = 'Forgot password?';
	forgotPasswordLink.classList.add('forgot-password-link');

	const signInButton = document.createElement('button');
	signInButton.setAttribute('type', 'submit');
	signInButton.classList.add('sign-in-button');
	signInButton.innerText = 'Sign in';

	signInButton.addEventListener('click', handleSignIn);


	const signUpText = document.createElement('span');
	signUpText.innerText = 'New to А1 Tracking? ';

	const signUpLink = document.createElement('a');
	signUpLink.setAttribute('href', 'free.html#free-login');
	signUpLink.innerText = 'Create an account';
	signUpLink.classList.add('sign-up');

	formContainer.appendChild(logoImage);
	formContainer.appendChild(usernameLabel);
	formContainer.appendChild(usernameInput);
	formContainer.appendChild(passwordLabel);
	formContainer.appendChild(passwordInput);
	formContainer.appendChild(forgotPasswordLink);
	formContainer.appendChild(signInButton);
	formContainer.appendChild(signUpText);
	formContainer.appendChild(signUpLink);

	formOverlay.appendChild(formContainer);

	document.body.appendChild(formOverlay);

	formOverlay.addEventListener('click', function (event) {
		if (event.target === formOverlay) {
			closeLoginForm();
		}
	});
}

function handleSignIn(event) {
	event.preventDefault();

	const usernameInput = document.querySelector('.username-input');
	const passwordInput = document.querySelector('.password-input');
	const username = usernameInput.value;
	const password = passwordInput.value;

	if (username === 'admin' && password === 'admin') {
		alert('Login is done.');
		closeLoginForm();
	} else {
		alert('Incorrect username or password.');
		closeLoginForm();
	}
}

function closeLoginForm() {
	const formOverlay = document.querySelector('.form-overlay');
	document.body.removeChild(formOverlay);
}
