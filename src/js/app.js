import { setupAdvantages } from './advantages.js';
import { setupCounter } from './counter.js';

setupAdvantages();
setupCounter();

import './slider.js';


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


// Додавання обробника подій для кожної кнопки

if (logo) {
	logo.addEventListener('click', redirectedToHomePage)
}

function redirectedToHomePage() {
	window.location.href = 'main.html';
}

function redirectToFreePage() {
	window.location.href = 'free.html';
}

function redirectToFreeLog() {
	window.location.href = 'free.html#free-login';
}

function redirectToServicesPage() {
	window.location.href = 'services.html';
}

function redirectTo404Page() {
	window.location.href = '404.html';
}

if (header) {
	header.addEventListener('click', function (event) {
		if (event.target.id === 'freeButton' || event.target.classList.contains('main__free-btn')) {
			redirectToFreePage();
		}
	});
}

if (mainLoginButton) {
	mainLoginButton.addEventListener('click', showLoginForm)
}

if (loginButton) {
	loginButton.addEventListener('click', showLoginForm)
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
	tryFreeButtons.forEach(button => {
		button.addEventListener('click', redirectToFreeLog);
	});
}

if (homeButtons) {
	homeButtons.forEach(button => {
		button.addEventListener('click', redirectedToHomePage);
	});
}


// fункція, яка відображає вікно логін форми
import { showLoginForm, handleSignIn, closeLoginForm } from './login.js';

handleSignIn();
closeLoginForm();



// EMAIL

const form = document.getElementById('contacts__sms-form');
const nameInput = document.getElementById('contacts__sms-name');
const emailInput = document.getElementById('contacts__sms-email');
const messageInput = document.getElementById('contacts__sms-message');

// Перевірка наявності форми
if (form) {

	form.addEventListener('submit', (event) => {
		event.preventDefault();


		const name = nameInput.value;
		const email = emailInput.value;
		const message = messageInput.value;


		sendMessage(name, email, message);
	});
}

function sendMessage(name, email, message) {
	const data = {
		name: name,
		email: email,
		message: message
	};

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Error: ' + response.status);
			}
			return response.json();
		})
		.then(data => {
			// Обробка успішної відправки повідомлення
			console.log('Message sent successfully:', data);

			nameInput.value = '';
			emailInput.value = '';
			messageInput.value = '';

			alert(JSON.stringify(data));
			alert('Message sent successfully');
		})
		.catch(error => {
			// Обробка помилки відправки повідомлення
			console.error('Error:', error);
		});
}

// FREE FORM

const formElement = document.getElementById("main__free-form");
if (formElement) {
	formElement.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("main__free-name").value;
		const email = document.getElementById("main__free-email").value;
		const phone = document.getElementById("main__free-phone").value;
		const companyName = document.getElementById("main__free-company-name").value;
		const companyMCdot = document.getElementById("main__free-company-mc-dot").value;
		const message = document.getElementById("main__free-message").value;

		const formData = {
			name,
			email,
			phone,
			companyName,
			companyMCdot,
			message
		};

		// Відправляємо дані форми на сервер
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		})
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("An error occurred while submitting the form.");
				}
			})
			.then(function (data) {
				// Обробка успішного результату
				console.log("Server response:", data);
				alert(JSON.stringify(formData));

				document.getElementById("main__free-name").value = "";
				document.getElementById("main__free-email").value = "";
				document.getElementById("main__free-phone").value = "";
				document.getElementById("main__free-company-name").value = "";
				document.getElementById("main__free-company-mc-dot").value = "";
				document.getElementById("main__free-message").value = "";

				window.location.href = "thx.html";
			})
			.catch(function (error) {
				// Обробка помилки
				console.error("Error:", error);
			});
	});
}


