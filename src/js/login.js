export const loginForm = document.querySelector('.login__form-container');
export const loginOverlay = document.querySelector('.login__overlay');
export const usernameInput = document.getElementById('username');
export const passwordInput = document.getElementById('password');
export const loginButton = document.getElementById('loginButton');

export function openModal() {
	loginForm.style.display = 'block'; 
	loginOverlay.style.display = 'block'; 
}

export function closeModal() {
	loginForm.style.display = 'none'; 
	loginOverlay.style.display = 'none'; 
}

export function login(event) {
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