const loginForm = document.querySelector('.login__form-container');
const loginOverlay = document.querySelector('.login__overlay');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const mainLoginButton = document.querySelector('.main__login-btn');

export function openModal() {
	loginForm.style.display = 'block';
	loginOverlay.style.display = 'block';
}

export function closeModal() {
	loginForm.style.display = 'none';
	loginOverlay.style.display = 'none';
}

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
document.addEventListener('click', function (event) {
	if (!loginForm.contains(event.target) && !loginButton.contains(event.target)) {
		closeModal();
	}
});
loginForm.addEventListener('submit', login);
