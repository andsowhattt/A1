export const form = document.getElementById('contacts__sms-form');
export const nameInput = document.getElementById('contacts__sms-name');
export const emailInput = document.getElementById('contacts__sms-email');
export const messageInput = document.getElementById('contacts__sms-message');

export function sendMessage(name, email, message) {
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

