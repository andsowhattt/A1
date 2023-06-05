export function openMenu() {
	// Отримуємо необхідні елементи з DOM
	const menuList = document.querySelector('.header__menu-list');
	const menuToggle = document.querySelector('.header__menu-toggle');
	const menuClose = document.querySelector('.header__menu-close');

	menuList.style.display = 'block';
	menuToggle.style.display = 'none';
	menuClose.style.display = 'block';
}

export function closeMenu() {
	// Отримуємо необхідні елементи з DOM
	const menuList = document.querySelector('.header__menu-list');
	const menuToggle = document.querySelector('.header__menu-toggle');
	const menuClose = document.querySelector('.header__menu-close');

	menuList.style.display = 'none';
	menuToggle.style.display = 'block';
	menuClose.style.display = 'none';
}

export function checkScreenWidth() {
	// Отримуємо необхідні елементи з DOM
	const menuList = document.querySelector('.header__menu-list');
	const menuToggle = document.querySelector('.header__menu-toggle');
	const menuClose = document.querySelector('.header__menu-close');

	const screenWidth = window.innerWidth;
	if (screenWidth <= 880) {
		// Відображаємо бургер-меню
		menuList.style.display = 'none';
		menuToggle.style.display = 'block';
		menuClose.style.display = 'none';
	} else {
		// Відображаємо стандартне горизонтальне меню
		menuList.style.display = 'flex';
		menuToggle.style.display = 'none';
		menuClose.style.display = 'none';
	}
}

export function initializeBurgerMenu() {
	// Отримуємо необхідні елементи з DOM
	const menuToggle = document.querySelector('.header__menu-toggle');
	const menuClose = document.querySelector('.header__menu-close');
	const menuList = document.querySelector('.header__menu-list');

	// Перевірка наявності елементів перед прикріпленням обробників подій
	if (menuToggle && menuClose && menuList) {
		menuToggle.addEventListener('click', openMenu);
		menuClose.addEventListener('click', closeMenu);

		// Викликаємо функцію перевірки розміру екрану при завантаженні сторінки
		checkScreenWidth();

		// Викликаємо функцію перевірки розміру екрану при зміні розміру вікна
		window.addEventListener('resize', checkScreenWidth);
	}
}


