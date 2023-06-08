// burger
import { initializeBurgerMenu } from './modules/burger.js';

document.addEventListener('DOMContentLoaded', function () {
	initializeBurgerMenu();
});

// login
import './modules/login.js';


// advantages
import { setupAdvantages } from './modules/advantages.js';
setupAdvantages();

// counter
import { setupCounter } from './modules/counter.js';
setupCounter();

// slider
import './modules/slider.js';

// email
import { sendMessage } from './modules/email.js';
const form = document.getElementById('contacts__sms-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		sendMessage();
	});
}

// freeform
import { formElement, formSubmitHandler } from './modules/freeform.js';
if (formElement) {
	formElement.addEventListener("submit", formSubmitHandler);
}