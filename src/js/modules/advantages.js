export function setupAdvantages() {
	const advantagesItems = document.querySelectorAll('.main__advantages-item');

	advantagesItems.forEach(item => {
		const shortDescription = item.querySelector('.short-description');
		const fullDescription = item.querySelector('.full-description');

		item.addEventListener('mouseover', () => {
			item.classList.add('active');
			fullDescription.style.display = 'block';
			shortDescription.style.display = 'none';
		});

		item.addEventListener('mouseout', () => {
			item.classList.remove('active');
			fullDescription.style.display = 'none';
			shortDescription.style.display = 'block';
		});
	});
}
