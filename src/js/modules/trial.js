export const formElement = document.getElementById("trial__form-block");

export const formSubmitHandler = function (event) {
	event.preventDefault();
	const formElement = document.getElementById("trial__form-block");
	const name = document.getElementById("trial__form-name").value;
	const email = document.getElementById("trial__form-email").value;
	const phone = document.getElementById("trial__form-phone").value;
	const companyName = document.getElementById("trial__form-company").value;
	const companyMCdot = document.getElementById("trial__form-mc").value;
	const message = document.getElementById("trial__form-message").value;

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