export function openModal() {
	const loginForm = document.querySelector('.login__form-container');
	const loginOverlay = document.querySelector('.login__overlay');
	loginForm.style.display = 'block';
	loginOverlay.style.display = 'block';
}

export function closeModal() {
	const loginForm = document.querySelector('.login__form-container');
	const loginOverlay = document.querySelector('.login__overlay');
	loginForm.style.display = 'none';
	loginOverlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
	const loginForm = document.querySelector('.login__form-container');
	const loginOverlay = document.querySelector('.login__overlay');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const loginButton = document.getElementById('loginButton');
	const mainLoginButton = document.querySelector('.main__login-btn');

	document.addEventListener('click', function (event) {
		if (
			event.target.matches('#loginButton') ||
			event.target.matches('.main__login-btn')
		) {
			openModal();
		} else if (
			!loginForm.contains(event.target) &&
			!loginButton.contains(event.target)
		) {
			closeModal();
		}
	});

	function login(event) {
		event.preventDefault();

		const username = usernameInput.value;
		const password = passwordInput.value;

		if (username === 'admin' && password === 'admin') {
			alert('Login is done.');
			closeModal();
		} else {
			alert('Incorrect username or password.');
		}

		event.target.reset();
	}

	loginButton.addEventListener('click', openModal);
	mainLoginButton.addEventListener('click', openModal);
	loginForm.addEventListener('submit', login);
});
