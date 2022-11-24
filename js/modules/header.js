export default function header() {
	// Data
	let isNavigationOpen = false;

	// Querry selectors
	const navigationButton = document.querySelector('.header__navigation-button')
	const navigation = document.querySelector('.header__navigation-list')
	const navigationButtonSVG = document.querySelector('.header__navigation-button-svg')

	// Event Listener
	navigationButton.addEventListener('click', handleNavigationButtonClick)
	
	// Handlers 
	function handleNavigationButtonClick() {
		toggleNavigation();
		renderHTML();
	}

	// Methods
	function toggleNavigation() {
		if (isNavigationOpen === true) {
			isNavigationOpen = false
		} else {
			isNavigationOpen = true;
		}
	}

	function renderHTML() {
		renderNavigation();
		renderNavigationButton();
	}

	// add and remove class
	function renderNavigation() {
		if (isNavigationOpen === true) {
			navigation.classList.add('header__navigation-list--visible');
		} else {
			navigation.classList.remove('header__navigation-list--visible');
		}
	}

	// Change src on the button
	function renderNavigationButton() {
		if (isNavigationOpen === true) {
			navigationButtonSVG.src='./assets/svg/close.svg'
		} else {
			navigationButtonSVG.src='./assets/svg/menu.svg'
		}
	}
}