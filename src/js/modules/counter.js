import { CountUp } from 'countup.js';

export function setupCounter() {
	const numbersSection = document.getElementById('numbers');
	const numbersElements = [
		{ id: 'loads', value: 25082, options: { prefix: '+' } },
		{ id: 'clients', value: 79, options: { prefix: '+' } },
		{ id: 'clients-net-income', value: 23, options: { prefix: '+', suffix: '%' } },
		{ id: 'miles-with-cargo', value: 15726920, options: { prefix: '+' } }
	];

	const observerOptions = {
		rootMargin: '0px',
		threshold: 0.4
	};

	const observerCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				numbersElements.forEach(({ id, value, options }) => {
					const counter = new CountUp(id, value, options);
					if (!counter.error) {
						counter.start();
					} else {
						console.error(counter.error);
					}
				});
				observer.unobserve(entry.target);
			}
		});
	};

	const observer = new IntersectionObserver(observerCallback, observerOptions);

	if (numbersSection) {
		observer.observe(numbersSection);
	}
}
