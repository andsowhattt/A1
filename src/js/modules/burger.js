function openMenu(menuList, menuToggle, menuClose) {
	menuList.style.display = 'block';
	menuToggle.style.display = 'none';
	menuClose.style.display = 'block';
}

function closeMenu(menuList, menuToggle, menuClose) {
	menuList.style.display = 'none';
	menuToggle.style.display = 'block';
	menuClose.style.display = 'none';
}

function checkScreenWidth(menuList, menuToggle, menuClose) {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 880) {
		menuList.style.display = 'none';
		menuToggle.style.display = 'block';
		menuClose.style.display = 'none';
	} else {
		menuList.style.display = 'flex';
		menuToggle.style.display = 'none';
		menuClose.style.display = 'none';
	}
}

export function initializeBurgerMenu() {
	const menuToggle = document.querySelector('.header__menu-toggle');
	const menuClose = document.querySelector('.header__menu-close');
	const menuList = document.querySelector('.header__menu-list');

	if (menuToggle && menuClose && menuList) {
		menuToggle.addEventListener('click', () => {
			openMenu(menuList, menuToggle, menuClose);
		});
		menuClose.addEventListener('click', () => {
			closeMenu(menuList, menuToggle, menuClose);
		});

		checkScreenWidth(menuList, menuToggle, menuClose);

		window.addEventListener('resize', () => {
			checkScreenWidth(menuList, menuToggle, menuClose);
		});
	}
}
