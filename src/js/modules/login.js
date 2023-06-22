document.addEventListener('DOMContentLoaded', function () {
	const loginForm = document.querySelector('.login__form-container');
	const loginOverlay = document.querySelector('.login__overlay');
	const usernameInput = document.querySelector('.name--input-js');
	const passwordInput = document.querySelector('.pass--input-js');
	const loginButtons = document.querySelectorAll('.open--login-js');

	function openModal() {
		loginForm.style.display = 'block';
		loginOverlay.style.display = 'block';
	}

	function closeModal() {
		loginForm.style.display = 'none';
		loginOverlay.style.display = 'none';
	}

	document.addEventListener('click', function (event) {
		if (event.target.classList.contains('open--login-js')) {
			openModal();
		} else if (!loginForm.contains(event.target) && !event.target.classList.contains('open--login-js')) {
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

	for (const button of loginButtons) {
		button.addEventListener('click', openModal);
	}

	loginForm.addEventListener('submit', login);
});
