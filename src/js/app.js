import { CountUp } from 'countup.js';
import Swiper, { Navigation } from 'swiper';

// FULL DESCRIPTION

const advantagesItems = document.querySelectorAll('.main__advantages-item');

advantagesItems.forEach(item => {
	const shortDescription = item.querySelector('.short-description');
	const fullDescription = item.querySelector('.full-description');

	item.addEventListener('mouseover', () => {
		item.classList.add('active');
		fullDescription.style.display = 'block';
		shortDescription.style.display = 'none';
	});

	item.addEventListener('mouseout', () => {
		item.classList.remove('active');
		fullDescription.style.display = 'none';
		shortDescription.style.display = 'block';
	});
});


// COUNTER

const numbersSection = document.querySelector('#numbers');
const numbersElements = [
	{ id: 'loads', value: 25082, options: { prefix: '+' } },
	{ id: 'clients', value: 79, options: { prefix: '+' } },
	{ id: 'clients-net-income', value: 23, options: { prefix: '+', suffix: '%' } },
	{ id: 'miles-with-cargo', value: 15726920, options: { prefix: '+' } }
];

const observerOptions = {
	rootMargin: '0px',
	threshold: 0.4
};

const observerCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			numbersElements.forEach(({ id, value, options }) => {
				const counter = new CountUp(id, value, options);
				if (!counter.error) {
					counter.start();
				} else {
					console.error(counter.error);
				}
			});
			observer.unobserve(entry.target);
		}
	});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

if (numbersSection) {
	observer.observe(numbersSection);
}

// SLIDER

Swiper.use([Navigation]);

const swiper = new Swiper('.main__slider', {
	slidesPerView: 1,
	spaceBetween: 1,
	loop: true,
	speed: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		646: {
			slidesPerView: 2,
		},
		1033: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
	
});



// LOGIN, FREE
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

const firstBtn = document.getElementById('first__blog');
const secondBtn = document.getElementById('second__blog');
const thirdBtn = document.getElementById('third__blog');
const fourthBtn = document.getElementById('fourth__blog');
const fifthBtn = document.getElementById('fifth__blog');
const sixthBtn = document.getElementById('sixth__blog');

// Додавання обробника подій для кожної кнопки
if (firstBtn) {
	firstBtn.addEventListener('click', redirectedtoFirstBlog)
}

if (secondBtn) {
	secondBtn.addEventListener('click', redirectedtoSecondBlog)
}

if (thirdBtn) {
	thirdBtn.addEventListener('click', redirectedtoThirdBlog)
}

if (fourthBtn) {
	fourthBtn.addEventListener('click', redirectedtoFifthBlog)
}

if (fifthBtn) {
	fifthBtn.addEventListener('click', redirectedtoFourthBlog)
}

if (sixthBtn) {
	sixthBtn.addEventListener('click', redirectedtoSixthBlog)
}
if (logo) {
	logo.addEventListener('click', redirectedToHomePage)
}


function redirectedtoFirstBlog() {
	window.location.href = 'blog1.html';
}

function redirectedtoSecondBlog() {
	window.location.href = 'blog2.html';
}

function redirectedtoThirdBlog() {
	window.location.href = 'blog3.html';
}

function redirectedtoFifthBlog() {
	window.location.href = 'blog4.html';
}

function redirectedtoFourthBlog() {
	window.location.href = 'blog5.html';
}

function redirectedtoSixthBlog() {
	window.location.href = 'blog6.html';
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
function showLoginForm() {

	const formOverlay = document.createElement('div');
	formOverlay.classList.add('form-overlay');

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container');

	const logoImage = document.createElement('img');
	logoImage.setAttribute('src', '../img/logo.png');
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
// fункція, яка закриває форму
function closeLoginForm() {
	const formOverlay = document.querySelector('.form-overlay');
	document.body.removeChild(formOverlay);
}

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


