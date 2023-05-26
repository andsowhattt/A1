export const formElement = document.getElementById("main__free-form");

export const formSubmitHandler = function (event) {
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
};

