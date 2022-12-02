export default function header() {
	// Data
	let isNavigationOpen = false;

	// Querry selectors
	const navigationButton = document.querySelector('.header__navigation-button')
	const navigation = document.querySelector('.header__navigation-list')
	const navigationButtonSVG = document.querySelector('.header__navigation-button-svg')
	const listItemButtons = document.querySelectorAll('.header__list-item-button')

	// Event Listener
	navigationButton.addEventListener('click', handleNavigationButtonClick)

	for (const listItemButton of listItemButtons) {
		listItemButton.addEventListener('click', handleListItemButtonClick)
	}
	
	// Handlers 
	function handleNavigationButtonClick() {
		console.log('hwi')
		toggleNavigation();
		renderHTML();
	}

	function handleListItemButtonClick() {
		toggleNavigation();
		renderHTML();
	}

	// Methods
	// toggles isnavigation between true and false
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

	// add and remove visible class
	function renderNavigation() {
		if (isNavigationOpen === true) {
			navigation.classList.add('header__navigation-list--visible');
		} else {
			navigation.classList.remove('header__navigation-list--visible');
		}
	}

	// Change src icon on the button
	function renderNavigationButton() {
		if (isNavigationOpen === true) {
			navigationButtonSVG.src='./assets/svg/close.svg'
		} else {
			navigationButtonSVG.src='./assets/svg/menu.svg'
		}
	}
}