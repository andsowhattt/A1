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

// LOGIN
import { openModal } from './login.js';

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', openModal);