export const form = document.getElementById('contacts__sms-form');
export const nameInput = document.getElementById('contacts__sms-name');
export const emailInput = document.getElementById('contacts__sms-email');
export const messageInput = document.getElementById('contacts__sms-message');

export function sendMessage(name, email, message) {
	const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('message', message);

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: formData
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Error: ' + response.status);
			}
			return response.json();
		})
		.then(data => {
			console.log('Message sent successfully:', data);

			nameInput.value = '';
			emailInput.value = '';
			messageInput.value = '';

			const formDataObject = {
				name,
				email,
				message,
			};

			alert(JSON.stringify(formDataObject));
			alert('Message sent successfully');
		})
		.catch(error => {
			console.error('Error:', error);
		});
}
