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


const loginForm = document.querySelector('.login__form-container');
const loginOverlay = document.querySelector('.login__overlay');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

function openModal() {
	loginForm.style.display = 'block'; 
	loginOverlay.style.display = 'block'; 
}

function closeModal() {
	loginForm.style.display = 'none'; 
	loginOverlay.style.display = 'none'; 
}

function login(event) {
	event.preventDefault(); 

	const username = usernameInput.value;
	const password = passwordInput.value;

	if (username === 'admin' && password === 'admin') {
		alert('Login is done.');
	} else {
		alert('Incorrect username or password.');
	}

	event.target.reset(); 
}

loginButton.addEventListener('click', openModal);
document.addEventListener('click', function (event) {
	if (!loginForm.contains(event.target) && !loginButton.contains(event.target)) {
		closeModal();
	}
});
loginForm.addEventListener('submit', login);