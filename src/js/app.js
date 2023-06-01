// LOGIN
import { openModal } from './login.js';

if (openModal) {
	const loginButton = document.getElementById('loginButton');
	const mainLoginButton = document.querySelector('.main__login-btn');

	loginButton.addEventListener('click', openModal);
	mainLoginButton.addEventListener('click', openModal);
}


// advantages.js
import { setupAdvantages } from './advantages.js';
setupAdvantages();

// counter.js
import { setupCounter } from './counter.js';
setupCounter();

// slider.js
import './slider.js';

// email.js
import { sendMessage } from './email.js';
const form = document.getElementById('contacts__sms-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		sendMessage();
	});
}

// freeform.js
import { formElement, formSubmitHandler } from './freeform.js';
if (formElement) {
	formElement.addEventListener("submit", formSubmitHandler);
}