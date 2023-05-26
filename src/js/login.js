export function showLoginForm() {
	const formOverlay = document.createElement('div');
	formOverlay.classList.add('form-overlay');

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container');

	const logoImage = document.createElement('img');
	logoImage.setAttribute('src', '../img/logo/logo.png');
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

export function handleSignIn(event) {
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

export function closeLoginForm() {
	const formOverlay = document.querySelector('.form-overlay');
	document.body.removeChild(formOverlay);
}
