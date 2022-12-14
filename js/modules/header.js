export default function header() {
	// Data
	// This variable represents an abstract model of the header. Based on this model, I create the HTML which shows right slide.
	let isNavigationOpen = false;
	
 
	// Querryselectors
	// Here I select HTML elements that i want to interact with javascript. The reason I have it close to the top is that I know which HTML elements that's changed by javascript. I also need to select elements before eventlisteners.
	const navigationButton = document.querySelector('.header__navigation-button')
	const navigation = document.querySelector('.header__navigation-list')
	const navigationButtonSVG = document.querySelector('.header__navigation-button-svg')
	const listItemButtons = document.querySelectorAll('.header__list-item-button')


	// Event Listener
	// Here I listen to the an event on an element, in this cases a 'click'. When that event happens, it runs a handler function.
	navigationButton.addEventListener('click', handleNavigationButtonClick)

	for (const listItemButton of listItemButtons) {
		listItemButton.addEventListener('click', handleListItemButtonClick)
	}

	// Handlers 
	// Here I have the handlers that runs all the methods I want to happen. That way I have ane overview of what happens in the code without looking at the methods themself.
	function handleNavigationButtonClick() {
		toggleNavigation();
		renderHTML();
	}

	function handleListItemButtonClick() {
		toggleNavigation();
		renderHTML();
	}

	// Methods
	// Here I have all the methods, each function does one thing to make the code as clean as possible. Methods is a set of instructions to do a certain task.

	/**
	 *  This method changes the variable isnavigation between true and false. 
	 */
	function toggleNavigation() {
		if (isNavigationOpen === true) {
			isNavigationOpen = false;
		} else {
			isNavigationOpen = true;
		}
	}

	/**
	 *  renderHTML is a main function who runs every change in HTML. It has subfunctions which renders html. 
	 */
	function renderHTML() {
		renderNavigation();
		renderNavigationButton();
	}

	/**
	 * subfunction that renders the hamburger button in the navigation.
	 * this function is called only from renderHTML
	 * @see renderHTML
	 */
	  
	function renderNavigation() {
		if (isNavigationOpen === true) {
			navigation.classList.add('header__navigation-list--visible');
		} else {
			navigation.classList.remove('header__navigation-list--visible');
		}
	}

	/**
	 * subfunction that renders the hamburger button in the navigation.
	 * this function is called only from renderHTML
	 * @see renderHTML
	 */
	function renderNavigationButton() {
		if (isNavigationOpen === true) {
			navigationButtonSVG.src='./assets/svg/close.svg'
		} else {
			navigationButtonSVG.src='./assets/svg/menu.svg'
		}
	}
}