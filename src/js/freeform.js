export const formElement = document.getElementById("main__free-form");

export const formSubmitHandler = function (event) {
	event.preventDefault();
	const formElement = document.getElementById("main__free-form");
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
			
			console.log("Server response:", data);
			alert(JSON.stringify(formData));

			
			formElement.reset();

			window.location.href = "thx.html";
		})
		.catch(function (error) {
			
			console.error("Error:", error);
		});
};