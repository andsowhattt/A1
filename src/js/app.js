// burger
import { initializeBurgerMenu } from './burger.js';

document.addEventListener('DOMContentLoaded', function () {
	initializeBurgerMenu();
});

// login
import { openModal } from './login.js';

const loginButton = document.getElementById('loginButton');
const mainLoginButton = document.querySelector('.main__login-btn');

if (loginButton) {
	loginButton.addEventListener('click', openModal);
}

if (mainLoginButton) {
	mainLoginButton.addEventListener('click', openModal);
}




// advantages
import { setupAdvantages } from './advantages.js';
setupAdvantages();

// counter
import { setupCounter } from './counter.js';
setupCounter();

// slider
import './slider.js';

// email
import { sendMessage } from './email.js';
const form = document.getElementById('contacts__sms-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		sendMessage();
	});
}

// freeform
import { formElement, formSubmitHandler } from './freeform.js';
if (formElement) {
	formElement.addEventListener("submit", formSubmitHandler);
}