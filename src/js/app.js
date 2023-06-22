import './modules/login.js';
import { initializeBurgerMenu } from './modules/burger.js';
import { setupAdvantages } from './modules/advantages.js';
import { setupCounter } from './modules/counter.js';
import './modules/slider.js';
import { sendMessage } from './modules/email.js';
import { formElement, formSubmitHandler } from './modules/trial.js';

document.addEventListener('DOMContentLoaded', function () {
	initializeBurgerMenu();
});

setupAdvantages();

setupCounter();

const form = document.getElementById('email__sms-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		sendMessage();
	});
}

if (formElement) {
	formElement.addEventListener("submit", formSubmitHandler);
}